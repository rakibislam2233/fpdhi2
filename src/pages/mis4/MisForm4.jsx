import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetOrganisationUnitsByUserQuery,
  useGetUpazilaByUserQuery,
  useGetZillaByUserQuery,
  useGetZillasQuery,
} from "../../../src/redux/api/orgUnitApi";
import _ from "underscore";
import { Row, Select, Button, Form, DatePicker, BackTop } from "antd";
import {
  getResult,
  makeMis4TableFormatAggr,
} from "../../../src/utils/DataSerializer.jsx";
import {
  mergeByProperty,
  replaceOrgUnitId,
  orgUnitDataSets,
  rejectSpecificWord,
} from "../../../src/utils/Utils.jsx";
import PrintBtn from "../../components/PrintBtnAggr";
import Mis4ReportTable from "./mis4table/Mis4ReportTable";
const Option = Select.Option;
const { MonthPicker } = DatePicker;

const MisForm4 = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {
    zilla,
    upazila,
    period,
    userOrgUnits,
    mis2reportdata,
    mis3reportdata,
    mis4FinalDataAggr,
  } = useSelector((state) => ({
    zilla: state.ui?.misForm4Aggr?.userDataViewZilla || "",
    upazila: state.getgeo?.userUpazila || [], // This might still need RTK Query data
    period: state.ui?.misForm4Aggr?.month || "",
    userOrgUnits: state.ui?.misForm4Aggr?.userOrgUnits || [],
    mis2reportdata: state.ui?.misForm4Aggr?.mis2reportdata || [],
    mis3reportdata: state.ui?.misForm4Aggr?.mis3reportdata || [],
    mis4FinalDataAggr: state.ui?.misForm4Aggr?.mis4FinalDataAggr || {},
  }));
  const { data: upazillaReponse } = useGetUpazilaByUserQuery();
  const upazillaData = upazillaReponse?.organisationUnits[0];
  console.log("upazillaReponse", upazillaData);

  const { data: userData, isLoading: userLoading } =
    useGetOrganisationUnitsByUserQuery();

  useEffect(() => {
    // The data is now automatically fetched by the RTK Query hook
    // You can handle the data or loading state here if needed
  }, [userData]);

  const handleSubmit = (values) => {
    var period = values["monthpicker"].format("YYYYMM"),
      orgUnitId = values["upazila"];
    dispatch(fetchUserOrgUnits(orgUnitId)).then(() => {
      var orgUnitDataSetList = orgUnitDataSets(userOrgUnits);
      Promise.all([
        dispatch(
          fetchUserDataViewZilla(
            getResult(orgUnitDataSetList.mis2, "displayName", "Union")[0].id
          )
        ),
        dispatch(fetchMis2DataSet(orgUnitDataSetList.mis2, period)),
        dispatch(fetchMis3DataSet(orgUnitDataSetList.mis3, period)),
      ]).then(() => {
        var mis2ByOrgUnit = _.groupBy(mis2reportdata, "orgUnit");
        var mis3ByOrgUnit = _.groupBy(mis3reportdata, "orgUnit");
        console.log(orgUnitDataSetList, mis3ByOrgUnit);
        var mis3OrgUnit = _.pluck(orgUnitDataSetList.mis3, "id");
        _.map(orgUnitDataSetList.mis2, (d) => {
          var unionId = d.id;
          //ADDING THOSE UNION WHOSE DATA has NOT been ENTERED YET
          if (!_.has(mis2ByOrgUnit, unionId)) {
            mis2ByOrgUnit[unionId] = [];
          }
          //MERGING WITH THOSE UNION WHO COMPLETES BOTH MIS2, MIS3
          if (_.contains(mis3OrgUnit, unionId)) {
            mis2ByOrgUnit[unionId].push(mis3ByOrgUnit[d.id]);
            mis2ByOrgUnit[unionId] = _.flatten(mis2ByOrgUnit[unionId]);
          }
          //MERGING WITH CHILDREN - FWC,UH&FWC(GOV) WITH UNION
          else {
            var children = _.pluck(d.children, "id");
            var mergedId = _.intersection(mis3OrgUnit, children);
            // console.log(children, mergedId, orgUnitDataSetList);

            if (mergedId.length) {
              _.map(mergedId, (d) => {
                var _others = _.findWhere(orgUnitDataSetList.mis3, {
                  id: d,
                }); //Except NGOS and MultiSectoral

                if (
                  !_others.displayName.endsWith("(NGO)") &&
                  !_others.displayName.endsWith("(Multi-Sectoral)")
                ) {
                  if (_.has(mis2ByOrgUnit, unionId)) {
                    mis2ByOrgUnit[unionId].push(mis3ByOrgUnit[d]);
                  } else {
                    mis2ByOrgUnit[unionId] = mis3ByOrgUnit[d];
                  }

                  mis2ByOrgUnit[unionId] = _.flatten(mis2ByOrgUnit[unionId]);
                }
                //CHECK NGOS,MULTISECTORAL
                if (
                  _others.displayName.endsWith("(NGO)") ||
                  _others.displayName.endsWith("(Multi-Sectoral)")
                ) {
                  if (_.has(mis2ByOrgUnit, _others.id)) {
                    console.log(
                      "(NGO)HAS",
                      mis2ByOrgUnit,
                      mis3ByOrgUnit[_others.id]
                    );
                    // mis2ByOrgUnit[_others.id].push(mis3ByOrgUnit[_others.id]);
                  } else {
                    console.log(
                      "(NGO)NOTHAS",
                      mis2ByOrgUnit,
                      mis3ByOrgUnit[_others.id]
                    );
                    mis2ByOrgUnit[_others.id] = mis3ByOrgUnit[_others.id];
                  }

                  mis2ByOrgUnit[_others.id] = _.flatten(
                    mis2ByOrgUnit[_others.id]
                  );
                }
                //c236
                var unionFacility = _.findWhere(orgUnitDataSetList.mis3, {
                  id: d,
                }); //UH&FWC

                if (
                  unionFacility.displayName.endsWith("(UH&FWC)") ||
                  unionFacility.displayName.endsWith("(FWC)") ||
                  unionFacility.displayName.endsWith("(UHC)")
                ) {
                  var cElement236 = _.findWhere(mis3ByOrgUnit[d], {
                    dataElement: "RASKJrsiQeD",
                    categoryOptionCombo: "y8qayP3216s",
                  }); //-c236

                  if (!_.isUndefined(cElement236)) {
                    mis2ByOrgUnit[unionId].push({
                      dataElement: "RASKJrsiQeD",
                      categoryOptionCombo: "y8qayP3216s-c236",
                      attributeOptionCombo: cElement236.attributeOptionCombo,
                      value: cElement236.value,
                      period: cElement236.period,
                      orgUnit: cElement236.orgUnit,
                    });
                  }
                }
                //c237, c238, c239
                if (unionFacility.displayName.endsWith("(MCWC)")) {
                  var cElement237 = _.findWhere(mis3ByOrgUnit[d], {
                    dataElement: "RASKJrsiQeD",
                    categoryOptionCombo: "y8qayP3216s",
                  }); //-c237
                  var cElement238 = _.findWhere(mis3ByOrgUnit[d], {
                    dataElement: "qOAT1tBQQag",
                    categoryOptionCombo: "y8qayP3216s",
                  }); //-c238
                  var cElement239 = _.findWhere(mis3ByOrgUnit[d], {
                    dataElement: "mJO7Kby4sae",
                    categoryOptionCombo: "y8qayP3216s",
                  }); //-c239

                  if (!_.isUndefined(cElement237)) {
                    mis2ByOrgUnit[unionId].push({
                      dataElement: "RASKJrsiQeD",
                      categoryOptionCombo: "y8qayP3216s-c237",
                      attributeOptionCombo: cElement237.attributeOptionCombo,
                      value: cElement237.value,
                      period: cElement237.period,
                      orgUnit: cElement237.orgUnit,
                    });
                  }
                  if (!_.isUndefined(cElement238)) {
                    mis2ByOrgUnit[unionId].push({
                      dataElement: "qOAT1tBQQag",
                      categoryOptionCombo: "y8qayP3216s-c238",
                      attributeOptionCombo: cElement238.attributeOptionCombo,
                      value: cElement238.value,
                      period: cElement238.period,
                      orgUnit: cElement238.orgUnit,
                    });
                  }
                  if (!_.isUndefined(cElement239)) {
                    mis2ByOrgUnit[unionId].push({
                      dataElement: "mJO7Kby4sae",
                      categoryOptionCombo: "y8qayP3216s-c239",
                      attributeOptionCombo: cElement239.attributeOptionCombo,
                      value: cElement239.value,
                      period: cElement239.period,
                      orgUnit: cElement239.orgUnit,
                    });
                  }
                }
              });
            }
          }
        });
        var mergeOrgList = mergeByProperty(
          orgUnitDataSetList.mis2,
          orgUnitDataSetList.mis3,
          "id"
        );

        var mis2ByOrgUnit = replaceOrgUnitId(mis2ByOrgUnit, mergeOrgList);

        var dataSet = makeMis4TableFormatAggr(mis2ByOrgUnit);
        dispatch(addMIS4DataSet(dataSet));
        dispatch(
          setReportHeader(
            zilla,
            upazila,
            values["monthpicker"].format("MMMM-YYYY")
          )
        );
      });
    });
  };

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
              name="upazila"
              label="উপজেলা"
              rules={[
                { required: true, message: "Please input your Upazila!" },
              ]}
            >
              <Select size="large" style={{ width: 200 }}>
                <Option value={upazillaData?.id}>{upazillaData?.displayName}</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="monthpicker"
              label="মাস"
              rules={[{ required: true, message: "Please input your Month!" }]}
            >
              <MonthPicker size="large" format="MMMM-YYYY" />
            </Form.Item>
            <Form.Item>
              {/* <Spin spinning={this.loader} indicator={antIcon} /> */}
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
        month={period}
        zilla={zilla}
        upazila={upazila}
        data={mis4FinalDataAggr}
      ></Mis4ReportTable>

      <BackTop />
    </div>
  );
};

export default MisForm4;
