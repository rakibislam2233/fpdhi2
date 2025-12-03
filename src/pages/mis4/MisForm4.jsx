import React, { useState, useEffect, useMemo } from "react";
import { Form, Button, DatePicker, Spin, Row, message } from "antd";
import _ from "underscore";
import {
  useGetUpazilaByUserQuery,
  useGetUserOrgUnitsQuery,
  useGetUserDataViewZillaQuery,
} from "../../redux/api/orgUnitApi";
import {
  useGetMis2DataSetQuery,
  useGetMis3DataSetQuery,
} from "../../redux/api/dataApi";
import { rejectSpecificWord } from "../../utils/Utils";
import { makeMis4TableFormatAggr } from "../../utils/DataSerializer";

const { MonthPicker } = DatePicker;

const MisForm4 = () => {
  const [antForm] = Form.useForm();
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [finalReportData, setFinalReportData] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [zillaName, setZillaName] = useState("");

  // ধাপ ১: User এর upazila fetch করা
  const { data: userUpazilaData, isLoading: loadingUser } =
    useGetUpazilaByUserQuery();

  const upazila = userUpazilaData?.organisationUnits?.[0];

  const upazilaName = useMemo(() => {
    if (!upazila) return "";
    return rejectSpecificWord(
      upazila.name || upazila.displayName || "",
      "upazila"
    );
  }, [upazila]);

  // ধাপ ২: User এর org units fetch করা (dataSets এবং children সহ)
  const { data: userOrgUnitsData, isLoading: loadingOrgUnits } =
    useGetUserOrgUnitsQuery(undefined, {
      skip: !upazila?.id,
    });


  // ধাপ ৩: Organization units থেকে MIS2 এবং MIS3 filter করা
  const orgUnitDataSets = useMemo(() => {
    if (!userOrgUnitsData?.organisationUnits) {
      return { mis2: [], mis3: [] };
    }

    const units = userOrgUnitsData.organisationUnits;

    const mis2DataSetId = import.meta.env.VITE_MIS2_DATASET_ID;
    const mis3DataSetId = import.meta.env.VITE_MIS3_DATASET_ID;

    const mis2Units = units.filter((u) =>
      u.dataSets?.some((ds) => ds.id === mis2DataSetId)
    );
    const mis3Units = units.filter((u) =>
      u.dataSets?.some((ds) => ds.id === mis3DataSetId)
    );

    return { mis2: mis2Units, mis3: mis3Units };
  }, [userOrgUnitsData]);

  // ধাপ ৪: MIS2 এর first union থেকে Zilla name fetch করা
  const firstUnionId = orgUnitDataSets.mis2?.[0]?.id;

  const { data: zillaData } = useGetUserDataViewZillaQuery(firstUnionId, {
    skip: !firstUnionId || !selectedPeriod,
  });

  useEffect(() => {
    if (zillaData?.ancestors) {
      const zilla = zillaData.ancestors.find((a) => a.level === 3);
      if (zilla) {
        setZillaName(rejectSpecificWord(zilla.name, "District"));
      }
    }
  }, [zillaData]);

  // ধাপ ৫: All org unit IDs একসাথে prepare করা
  const allOrgUnitIds = useMemo(() => {
    const allUnits = [...orgUnitDataSets.mis2, ...orgUnitDataSets.mis3];

    // Unique IDs only
    const uniqueIds = [...new Set(allUnits.map((u) => u.id))];

    // API format: &orgUnit=ID1&orgUnit=ID2
    return uniqueIds.map((id) => `&orgUnit=${id}`).join("");
  }, [orgUnitDataSets]);

  console.log("All OrgUtilsIds", allOrgUnitIds);
  // ধাপ ৬: MIS2 এবং MIS3 data fetch করা
  const {
    data: mis2Raw,
    isFetching: loading2,
    error: error2,
  } = useGetMis2DataSetQuery(
    { orgUnitId: allOrgUnitIds, period: selectedPeriod },
    { skip: !selectedPeriod || !allOrgUnitIds }
  );

  const {
    data: mis3Raw,
    isFetching: loading3,
    error: error3,
  } = useGetMis3DataSetQuery(
    { orgUnitId: allOrgUnitIds, period: selectedPeriod },
    { skip: !selectedPeriod || !allOrgUnitIds }
  );

  // ধাপ ৭: Data processing (OLD CODE এর logic)
  useEffect(() => {
    if (
      !mis2Raw?.dataValues ||
      !mis3Raw?.dataValues ||
      orgUnitDataSets.mis2.length === 0
    ) {
      if (selectedPeriod) setFinalReportData([]);
      return;
    }

    try {
      const mis2Data = mis2Raw.dataValues || [];
      const mis3Data = mis3Raw.dataValues || [];

      // Group করা org unit দিয়ে
      let mis2ByOrgUnit = _.groupBy(mis2Data, "orgUnit");
      const mis3ByOrgUnit = _.groupBy(mis3Data, "orgUnit");

      const mis3Ids = _.pluck(orgUnitDataSets.mis3, "id");

      // OLD CODE এর main logic - union level এ data merge করা
      _.map(orgUnitDataSets.mis2, (unit) => {
        const unionId = unit.id;

        // Empty array initialize করা যদি data না থাকে
        if (!_.has(mis2ByOrgUnit, unionId)) {
          mis2ByOrgUnit[unionId] = [];
        }

        // Union নিজেই MIS3 complete করলে directly merge
        if (_.contains(mis3Ids, unionId)) {
          mis2ByOrgUnit[unionId] = mis2ByOrgUnit[unionId].concat(
            mis3ByOrgUnit[unionId] || []
          );
        }
        // না হলে children থেকে MIS3 data নেওয়া
        else {
          const children = _.pluck(unit.children || [], "id");
          const matchedChildren = _.intersection(children, mis3Ids);

          if (matchedChildren.length) {
            _.map(matchedChildren, (childId) => {
              const facility = _.findWhere(orgUnitDataSets.mis3, {
                id: childId,
              });

              if (!facility) return;

              const facilityName = facility.displayName || facility.name;

              // Regular facilities (not NGO/Multi-Sectoral)
              if (
                !facilityName.includes("(NGO)") &&
                !facilityName.includes("(Multi-Sectoral)")
              ) {
                mis2ByOrgUnit[unionId] = mis2ByOrgUnit[unionId].concat(
                  mis3ByOrgUnit[childId] || []
                );
              }

              // NGO এবং Multi-Sectoral আলাদা রাখা
              if (
                facilityName.includes("(NGO)") ||
                facilityName.includes("(Multi-Sectoral)")
              ) {
                if (!mis2ByOrgUnit[childId]) {
                  mis2ByOrgUnit[childId] = [];
                }
                mis2ByOrgUnit[childId] = mis2ByOrgUnit[childId].concat(
                  mis3ByOrgUnit[childId] || []
                );
              }

              // Special handling for UH&FWC, FWC, UHC - c236 logic
              if (
                facilityName.includes("(UH&FWC)") ||
                facilityName.includes("(FWC)") ||
                facilityName.includes("(UHC)")
              ) {
                const cElement236 = _.findWhere(mis3ByOrgUnit[childId] || [], {
                  dataElement: "RASKJrsiQeD",
                  categoryOptionCombo: "y8qayP3216s",
                });

                if (cElement236) {
                  mis2ByOrgUnit[unionId].push({
                    ...cElement236,
                    categoryOptionCombo: "y8qayP3216s-c236",
                  });
                }
              }

              // Special handling for MCWC - c237, c238, c239 logic
              if (facilityName.includes("(MCWC)")) {
                const childData = mis3ByOrgUnit[childId] || [];

                const cElement237 = _.findWhere(childData, {
                  dataElement: "RASKJrsiQeD",
                  categoryOptionCombo: "y8qayP3216s",
                });
                const cElement238 = _.findWhere(childData, {
                  dataElement: "qOAT1tBQQag",
                  categoryOptionCombo: "y8qayP3216s",
                });
                const cElement239 = _.findWhere(childData, {
                  dataElement: "mJO7Kby4sae",
                  categoryOptionCombo: "y8qayP3216s",
                });

                if (cElement237) {
                  mis2ByOrgUnit[unionId].push({
                    ...cElement237,
                    categoryOptionCombo: "y8qayP3216s-c237",
                  });
                }
                if (cElement238) {
                  mis2ByOrgUnit[unionId].push({
                    ...cElement238,
                    categoryOptionCombo: "y8qayP3216s-c238",
                  });
                }
                if (cElement239) {
                  mis2ByOrgUnit[unionId].push({
                    ...cElement239,
                    categoryOptionCombo: "y8qayP3216s-c239",
                  });
                }
              }
            });
          }
        }

        // Flatten করা
        mis2ByOrgUnit[unionId] = _.flatten(mis2ByOrgUnit[unionId]);
      });

      // Final table format তৈরি করা
      const finalTableData = makeMis4TableFormatAggr(mis2ByOrgUnit);
      setFinalReportData(finalTableData);

      message.success("রিপোর্ট সফলভাবে তৈরি হয়েছে");
    } catch (error) {
      console.error("Data processing error:", error);
      message.error("ডেটা প্রসেস করতে সমস্যা হয়েছে");
      setFinalReportData([]);
    }
  }, [mis2Raw, mis3Raw, orgUnitDataSets, selectedPeriod]);

  // Form submit handler
  const handleSubmit = (values) => {
    const period = values.monthpicker.format("YYYYMM");
    const monthStr = values.monthpicker.format("MMMM-YYYY");
    setSelectedPeriod(period);
    setMonthName(monthStr);
  };

  // Loading states
  if (loadingUser || loadingOrgUnits) {
    return (
      <div style={{ textAlign: "center", padding: 100 }}>
        <Spin size="large" tip="ইউজার তথ্য লোড হচ্ছে..." />
      </div>
    );
  }

  if (!upazila) {
    return (
      <div style={{ textAlign: "center", padding: 100, color: "red" }}>
        উপজেলা অ্যাসাইন করা নেই
      </div>
    );
  }

  if (error2 || error3) {
    return (
      <div style={{ textAlign: "center", padding: 100, color: "red" }}>
        ডেটা লোড করতে সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।
      </div>
    );
  }

  return (
    <div className="mis4tbl">
      <div className="criteria-holder">
        <Row type="flex" justify="center">
          <Form form={antForm} layout="inline" onFinish={handleSubmit}>
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
              <MonthPicker format="MMMM-YYYY" placeholder="মাস নির্বাচন করুন" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading2 || loading3}
                disabled={!orgUnitDataSets.mis2.length}
              >
                View
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </div>

      <hr />

      {loading2 || loading3 ? (
        <div style={{ textAlign: "center", padding: 60 }}>
          <Spin size="large" tip="ডেটা লোড হচ্ছে..." />
        </div>
      ) : finalReportData.length > 0 ? (
        <div>
          <h2 style={{ textAlign: "center" }}>
            MIS-4 Report - {zillaName} - {upazilaName} - {monthName}
          </h2>
          {/* Your Mis4ReportTable component here */}
          <pre>{JSON.stringify(finalReportData, null, 2)}</pre>
        </div>
      ) : selectedPeriod ? (
        <div style={{ textAlign: "center", padding: 60, color: "#999" }}>
          এই মাসের জন্য কোনো তথ্য পাওয়া যায়নি
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: 60, color: "#999" }}>
          মাস নির্বাচন করে View বাটনে ক্লিক করুন
        </div>
      )}
    </div>
  );
};

export default MisForm4;
