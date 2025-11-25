import { Alert, Button, Col, DatePicker, Form, Row, Select, Spin } from "antd";
import qs from "query-string";
import { Component } from "react";
import { connect } from "react-redux";
import _ from "underscore";
import { API_CONSTANT_MAP } from "../utils/BaseApi";
import {
  disableLoading,
  enableLoading,
  getOrgUnit,
  getSSData,
  resetDhis2Data,
  resetSSData,
  send2Dhis2SS,
} from "../redux/actions/import.ss.action";

const Option = Select.Option;
const { MonthPicker } = DatePicker;
const FormItem = Form.Item;
const ReportType = [
  {
    label: "এমআইএস ফরম-২",
    value: import.meta.env.VITE_MIS2_DATASET_ID,
  },
  {
    label: "এমআইএস ফরম-৩",
    value: import.meta.env.VITE_MIS3_DATASET_ID,
  },
];

export class ImportServiceStat extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderOrgUnit = this.renderOrgUnit.bind(this);
  }

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        var orgUnit =
          fieldsValue.org_unit === "1"
            ? this.omitOthers(this.props.orgUnit)
            : _.pluck(
                _.where(this.props.orgUnit, {
                  id: fieldsValue.org_unit,
                }),
                "id"
              );
        if (this.props.dataResponseSS.length) {
          this.props.resetSSData();
          this.props.resetDhis2Data();
        }
        this.loadSSData(
          orgUnit,
          fieldsValue.report_type,
          fieldsValue.monthpicker.format("YYYYMMDD")
        ).then((response) => {
          console.log(response, "HHH");
          var length = this.props.dataResponseSS.length;
          var requestBuffer = [];
          this.props.enableLoading();
          for (let i = 0; i < length; i++) {
            if (this.props.dataResponseSS[i].data.dataValues.length > 0) {
              var d = _.omit(this.props.dataResponseSS[i].data, "orgUnitName");
              requestBuffer.push(
                this.props.send2Dhis2SS(API_CONSTANT_MAP.export_ss_dhis2, d)
              );
            }
          }
          Promise.all(requestBuffer).then((d) => {
            console.log("Send to DHIS2", d);
            this.props.disableLoading();
          });
        });
      }
    });
  }

  omitOthers(arr) {
    //Omit NGOS and Multisectoral
    var ous = _.filter(arr, (item) => {
      if (
        !item.displayName.toUpperCase().includes("-(NGO)") &&
        !item.displayName.toUpperCase().includes("-(Multi-sectoral)")
      ) {
        return item.id;
      }
    });
    return _.pluck(ous, "id");
  }

  async loadSSData(arr, report_type, month) {
    let requestBuffer = [];
    let limit = 1;
    var url = API_CONSTANT_MAP.import_ss_get_data;
    var p_name =
      report_type === import.meta.env.VITE_MIS2_DATASET_ID
        ? import.meta.env.VITE_SS_MIS2
        : report_type === import.meta.env.VITE_MIS3_DATASET_ID
        ? import.meta.env.VITE_SS_MIS3
        : "";
    var index = arr.length;
    // for (let index = 0; index < arr.length; index++) {
    this.props.enableLoading();
    while (index--) {
      console.log(index);
      var tempArray = arr.splice(0, limit);
      for (var j = 0; j < tempArray.length; j++) {
        let id = tempArray[j];
        let orgName = _.pluck(
          _.where(this.props.orgUnit, {
            id: id,
          }),
          "name"
        )[0];
        // var unionCodeSS = DHIS2SSORGMAP.hasOwnProperty(id)
        //   ? DHIS2SSORGMAP[id][0]
        //   : "";
        // if (unionCodeSS) {
        requestBuffer.push(
          this.props.getSSData(
            url,
            qs.stringify({
              // code: unionCodeSS,
              code: "",
              id: id,
              report_id: report_type,
              p_name: p_name,
              monCode: month,
              orgName: orgName,
            }),
            {
              "Content-Type": "application/x-www-form-urlencoded",
            }
          )
        );
      }

      // console.log(tempArray, arr, requestBuffer);
      if (requestBuffer.length) {
        await Promise.all([requestBuffer, this.timeout(2000)]).then(
          (d) => {
            console.log(d);
            // console.log(this.props.dataResponseSS, "@@@@@", requestBuffer.length % limit);
          },
          (e) => {
            this.props.resetSSData();
          }
        );
        requestBuffer.splice(0, requestBuffer.length);
      }
    }
    this.props.disableLoading();
  }

  renderOrgUnit(v) {
    var url =
      v === import.meta.env.VITE_MIS2_DATASET_ID
        ? API_CONSTANT_MAP.import_ss_mis2_get_org(v)
        : v === import.meta.env.VITE_MIS3_DATASET_ID
        ? API_CONSTANT_MAP.import_ss_mis3_get_org(v)
        : "";
    this.props.getOrgUnit(url).then(() => console.log(this.props.orgUnit));
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Spin spinning={this.props.loading}>
          <Row type="flex" justify="center">
            <Col>
              <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem label="রিপোর্ট">
                  {getFieldDecorator("report_type", {
                    rules: [
                      {
                        required: true,
                        message: "You must select one value!",
                      },
                    ],
                  })(
                    <Select
                      size="large"
                      style={{
                        width: 200,
                      }}
                      onChange={this.renderOrgUnit}
                    >
                      {ReportType.map((e, i) => (
                        <Option key={e.value}> {e.label} </Option>
                      ))}
                    </Select>
                  )}
                </FormItem>
                <FormItem label="ইউনিয়ন/ফেসিলিটি">
                  {getFieldDecorator("org_unit", {
                    rules: [
                      {
                        required: true,
                        message: "You must select one value!",
                      },
                    ],
                  })(
                    <Select
                      size="large"
                      style={{
                        width: 200,
                      }}
                    >
                      {this.props.modifiedOrgUnit.length &&
                        this.props.modifiedOrgUnit.map(
                          (e, i) =>
                            !e.displayName.toUpperCase().includes("-(NGO)") &&
                            !e.displayName
                              .toUpperCase()
                              .includes("-(Multi-sectoral)") && (
                              <Option key={e.id}> {e.displayName} </Option>
                            )
                        )}
                    </Select>
                  )}
                </FormItem>
                <FormItem label="মাস">
                  {getFieldDecorator("monthpicker", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Month!",
                      },
                    ],
                  })(<MonthPicker size="large" format="MMMMYYYY" />)}
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit">
                    Send to DHIS2
                  </Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
          <hr />
          <Row gutter={32}>
            {this.props.dataResponseSS.length > 0 &&
              this.props.dataResponseSS.map((d, i) => (
                <Col
                  span={6}
                  key={i}
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Alert
                    message={d.data.orgUnitName + " Data Recieved From SS."}
                    description={d.statusText}
                    style={{ height: "100px" }}
                    type="info"
                  />
                </Col>
              ))}
          </Row>
          <hr />
          <Row gutter={32}>
            {this.props.dataResponseDhis2.length > 0 &&
              this.props.dataResponseDhis2.map((d, i) => (
                <Col
                  span={6}
                  key={i}
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Alert
                    message={d.orgUnit + " Data Send To DHIS2."}
                    description={d.status}
                    type="info"
                    style={{ height: "100px" }}
                  />
                </Col>
              ))}
          </Row>
        </Spin>
        <hr />
      </div>
    );
  }
}

const WrappedImportServiceStat = Form.create()(ImportServiceStat);

const mapStateToProps = (state) => ({
  orgUnit: state.importssreducer.orgUnit,
  modifiedOrgUnit: state.importssreducer.modifiedOrgUnit,
  dataResponseSS: state.importssreducer.dataResponseSS,
  dataResponseDhis2: state.importssreducer.dataResponseDhis2,
  loading: state.importssreducer.loading,
});

const mapDispatchToProps = {
  getOrgUnit,
  getSSData,
  resetSSData,
  send2Dhis2SS,
  resetDhis2Data,
  enableLoading,
  disableLoading,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedImportServiceStat);
