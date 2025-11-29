import React, { useState, useEffect, useMemo } from "react";
import { Form, Button, DatePicker, Spin, Row } from "antd";
import _ from "underscore";
import {
  useGetUpazilaByUserQuery,
  useGetUnionsByParentQuery,
  useGetPouroshovasByParentQuery,
  useGetSadarByParentQuery,
  useGetGovByParentQuery,
  useGetNgoByParentQuery,
  useGetMultiSectoralByParentQuery,
} from "../../redux/api/orgUnitApi";
import {
  useGetMis2DataSetQuery,
  useGetMis3DataSetQuery,
} from "../../redux/api/dataApi";
import PrintBtn from "../../components/PrintBtn";
import { rejectSpecificWord } from "../../utils/Utils";
import { makeMis4TableFormatAggr } from "../../utils/DataSerializer";

const { MonthPicker } = DatePicker;

const MisForm4 = () => {
  const [form] = Form.useForm();
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [finalReportData, setFinalReportData] = useState([]);
  const [monthName, setMonthName] = useState("");

  const { data: userUpazilaData, isLoading: loadingUser } =
    useGetUpazilaByUserQuery();
  const upazila = userUpazilaData?.organisationUnits?.[0];
  const selectedUpazila = upazila?.id || "";

  // এইটাই মূল ফিক্স – useMemo দিয়ে স্টেবল ভ্যালু
  const upazilaName = useMemo(() => {
    if (!upazila) return "";
    return rejectSpecificWord(
      upazila.name || upazila.displayName || "",
      "upazila"
    );
  }, [upazila]);

  const { data: unions } = useGetUnionsByParentQuery(selectedUpazila, {
    skip: !selectedUpazila,
  });
  const { data: pouroshovas } = useGetPouroshovasByParentQuery(
    selectedUpazila,
    { skip: !selectedUpazila }
  );
  const { data: sadars } = useGetSadarByParentQuery(selectedUpazila, {
    skip: !selectedUpazila,
  });
  const { data: govs } = useGetGovByParentQuery(selectedUpazila, {
    skip: !selectedUpazila,
  });
  const { data: ngos } = useGetNgoByParentQuery(selectedUpazila, {
    skip: !selectedUpazila,
  });
  const { data: multis } = useGetMultiSectoralByParentQuery(selectedUpazila, {
    skip: !selectedUpazila,
  });

  const allOrgUnits = useMemo(
    () => [
      ...(unions?.organisationUnits || []),
      ...(pouroshovas?.organisationUnits || []),
      ...(sadars?.organisationUnits || []),
      ...(govs?.organisationUnits || []),
      ...(ngos?.organisationUnits || []),
      ...(multis?.organisationUnits || []),
    ],
    [unions, pouroshovas, sadars, govs, ngos, multis]
  );

  const orgUnitParam =
    allOrgUnits.length > 0
      ? allOrgUnits.map((ou) => `&orgUnit=${ou.id}`).join("")
      : "";

  const { data: mis2Raw, isFetching: loading2 } = useGetMis2DataSetQuery(
    { orgUnitId: orgUnitParam, period: selectedPeriod },
    { skip: !selectedUpazila || !selectedPeriod || orgUnitParam === "" }
  );

  const { data: mis3Raw, isFetching: loading3 } = useGetMis3DataSetQuery(
    { orgUnitId: orgUnitParam, period: selectedPeriod },
    { skip: !selectedUpazila || !selectedPeriod || orgUnitParam === "" }
  );

  useEffect(() => {
    if (
      !mis2Raw?.dataValues ||
      !mis3Raw?.dataValues ||
      allOrgUnits.length === 0
    ) {
      if (selectedPeriod) setFinalReportData([]);
      return;
    }

    const mis2 = mis2Raw.dataValues || [];
    const mis3 = mis3Raw.dataValues || [];

    let mis2ByOrgUnit = _.groupBy(mis2, "orgUnit");
    const mis3ByOrgUnit = _.groupBy(mis3, "orgUnit");

    const mis2Units = allOrgUnits.filter((ou) =>
      ou.dataSets?.some((ds) => ds.id === import.meta.env.VITE_MIS2_DATASET_ID)
    );
    const mis3Units = allOrgUnits.filter((ou) =>
      ou.dataSets?.some((ds) => ds.id === import.meta.env.VITE_MIS3_DATASET_ID)
    );

    const mis3Ids = _.pluck(mis3Units, "id");

    mis2Units.forEach((unit) => {
      const unionId = unit.id;
      if (!mis2ByOrgUnit[unionId]) mis2ByOrgUnit[unionId] = [];

      if (_.contains(mis3Ids, unionId)) {
        mis2ByOrgUnit[unionId] = mis2ByOrgUnit[unionId].concat(
          mis3ByOrgUnit[unionId] || []
        );
      } else {
        const childrenIds =
          _.chain(unit.children).pluck("id").flatten().value() || [];
        const matchedChildren = _.intersection(childrenIds, mis3Ids);

        matchedChildren.forEach((childId) => {
          const facility = _.findWhere(mis3Units, { id: childId });

          if (
            facility &&
            !facility.name.includes("(NGO)") &&
            !facility.name.includes("(Multi-Sectoral)")
          ) {
            mis2ByOrgUnit[unionId] = mis2ByOrgUnit[unionId].concat(
              mis3ByOrgUnit[childId] || []
            );
          }

          if (
            facility &&
            (facility.name.includes("(NGO)") ||
              facility.name.includes("(Multi-Sectoral)"))
          ) {
            mis2ByOrgUnit[childId] = (mis2ByOrgUnit[childId] || []).concat(
              mis3ByOrgUnit[childId] || []
            );
          }

          const childData = mis3ByOrgUnit[childId] || [];
          const isUHFWCorFWC = /\\(UH&FWC\\)|\\(FWC\\)|\\(UHC\\)/.test(
            facility?.name || ""
          );
          const isMCWC = facility?.name.includes("(MCWC)");

          childData.forEach((dv) => {
            if (
              dv.dataElement === "RASKJrsiQeD" &&
              dv.categoryOptionCombo === "y8qayP3216s"
            ) {
              const newCOC = isUHFWCorFWC
                ? "y8qayP3216s-c236"
                : "y8qayP3216s-c237";
              mis2ByOrgUnit[unionId].push({
                ...dv,
                categoryOptionCombo: newCOC,
              });
            }
            if (isMCWC) {
              if (
                dv.dataElement === "qOAT1tBQQag" &&
                dv.categoryOptionCombo === "y8qayP3216s"
              )
                mis2ByOrgUnit[unionId].push({
                  ...dv,
                  categoryOptionCombo: "y8qayP3216s-c238",
                });
              if (
                dv.dataElement === "mJO7Kby4sae" &&
                dv.categoryOptionCombo === "y8qayP3216s"
              )
                mis2ByOrgUnit[unionId].push({
                  ...dv,
                  categoryOptionCombo: "y8qayP3216s-c239",
                });
            }
          });
        });
      }
      mis2ByOrgUnit[unionId] = _.flatten(mis2ByOrgUnit[unionId]);
    });

    const finalTableData = makeMis4TableFormatAggr(mis2ByOrgUnit);
    setFinalReportData(finalTableData);
  }, [mis2Raw, mis3Raw, allOrgUnits, selectedPeriod]);

  const handleSubmit = (values) => {
    const period = values.monthpicker.format("YYYYMM");
    const monthStr = values.monthpicker.format("MMMM-YYYY");
    setSelectedPeriod(period);
    setMonthName(monthStr);
  };

  if (loadingUser)
    return (
      <div style={{ textAlign: "center", padding: 100 }}>
        <Spin size="large" />
      </div>
    );
  if (!upazila)
    return (
      <div style={{ textAlign: "center", padding: 100, color: "red" }}>
        উপজেলা অ্যাসাইন করা নেই
      </div>
    );

  return (
    <div className="mis4tbl">
      <div className="criteria-holder">
        <Row type="flex" justify="center">
          <Form form={form} layout="inline" onFinish={handleSubmit}>
            <Form.Item label="উপজেলা">
              <div
                style={{
                  width: 220,
                  padding: "4px 11px",
                  background: "#fafafa",
                  border: "1px solid #d9d9d9",
                  borderRadius: 6,
                }}
              >
                {upazilaName}
              </div>
            </Form.Item>

            <Form.Item
              name="monthpicker"
              label="মাস"
              rules={[{ required: true, message: "মাস নির্বাচন করুন" }]}
            >
              <MonthPicker format="MMMM-YYYY" placeholder="মাস" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading2 || loading3}
              >
                View
              </Button>
            </Form.Item>
          </Form>
          <PrintBtn />
        </Row>
      </div>

      <hr />

      {loading2 || loading3 ? (
        <div style={{ textAlign: "center", padding: 60 }}>
          <Spin size="large" tip="ডেটা লোড হচ্ছে..." />
        </div>
      ) : finalReportData.length > 0 ? (
        <Mis4ReportTable
          data={finalReportData}
          upazila={upazilaName}
          month={monthName}
        />
      ) : selectedPeriod ? (
        <div style={{ textAlign: "center", padding: 60, color: "#999" }}>
          এই মাসের জন্য কোনো তথ্য পাওয়া যায়নি
        </div>
      ) : null}
    </div>
  );
};

export default MisForm4;
