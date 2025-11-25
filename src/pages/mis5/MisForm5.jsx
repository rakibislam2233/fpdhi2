
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "underscore";
import {
  Row,
  Select,
  Button,
  Form,
  DatePicker,
  BackTop,
  Spin,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchUpazillasByParent } from "../../../src/redux/actions/getgeo.action";
import { fetchMis5Data, setMis5Data } from "../../../src/redux/actions/misform.action";
import { mis5Extractor } from "../../../src/utils/DataSerializer.jsx";
import { rejectSpecificWord } from "../../../src/utils/Utils.jsx";
import Mis4ReportTable from "../mis4/mis4table/Mis4ReportTable";
import PrintBtn from "../../components/PrintBtn";

const Option = Select.Option;
const { MonthPicker } = DatePicker;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const MisForm5 = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { d2ui, getgeo, mis5aggr, mis5FinalData, mis5ZillaName, mis5Month } =
    useSelector((state) => ({
      d2ui: state.d2ui,
      getgeo: state.getgeo,
      mis5aggr: state.misform4aggr.mis5aggrdata,
      mis5FinalData: state.misform4aggr.mis5FinalData,
      mis5ZillaName: state.misform4aggr.mis5ZillaName,
      mis5Month: state.misform4aggr.mis5Month,
    }));

  useEffect(() => {
    dispatch(fetchUpazillasByParent());
  }, [dispatch]);

  const handleChangeZilla = (value) => {
    dispatch(fetchUpazillasByParent(value));
  };

  const handleSubmit = (values) => {
    var period = values["monthpicker"].format("YYYYMM"),
      zillaName = _.pluck(
        _.where(getgeo.zilla, { id: values["zilla"] }),
        "name"
      )[0],
      zillaId = values["zilla"],
      month = values["monthpicker"].format("MMMM-YYYY");

    dispatch(fetchUpazillasByParent(zillaId)).then(() => {
      let upazilas = getgeo.upazilas;
      dispatch(fetchMis5Data(upazilas, period)).then((d) => {
        var mis5aggData = mis5Extractor(mis5aggr);
        dispatch(setMis5Data(mis5aggData, zillaName, month));
      });
    });
  };

  console.log(
    "==============================MisForm5 Data=======================================",
    mis5FinalData
  );
  return (
    <div>
      <div className="criteria-holder">
        <Row type="flex" justify="center">
          <Form
            form={form}
            layout="inline"
            onFinish={handleSubmit}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="zilla"
              label="জেলা"
              rules={[{ required: true, message: "Please input your Zilla!" }]}
            >
              <Select
                size="large"
                onChange={handleChangeZilla}
                style={{ width: 200 }}
              >
                {getgeo.zilla.map((e, i) => (
                  <Option key={e.id}>
                    {rejectSpecificWord(e.name, "district")}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="monthpicker"
              label="মাস"
              rules={[{ required: true, message: "Please input your Month!" }]}
            >
              <MonthPicker format="MMMM-YYYY" />
            </Form.Item>
            <Form.Item>
              <Spin spinning={getgeo.loading} indicator={antIcon} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                View
              </Button>
            </Form.Item>
          </Form>
          <PrintBtn></PrintBtn>
        </Row>
      </div>
      <hr />
      <Mis4ReportTable
        aggrdata={mis5FinalData}
        ngoaggrdata={[]}
        multisectoralaggrdata={[]}
        zilla={mis5ZillaName}
        month={mis5Month}
      />
      <BackTop />
    </div>
  );
};

export default MisForm5;
