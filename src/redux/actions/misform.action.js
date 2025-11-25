import axios from "axios";
import _ from "underscore";
import { apiDev } from ".";

export function fetchMIS4Data(unionIds, period) {
  return (dispatch) => {
    const mis4aggrurl =
      "/api/dataValueSets.json?dataSet=LDFlbqPCWfG&period=" +
      period +
      unionIds +
      "&orgUnitIdScheme=NAME";
    return dispatch({
      type: "FETCH_MIS4_AGGR",
      payload: apiDev.get(mis4aggrurl),
    });
  };
}

export function fetchMIS4Indicators(unionIds, period) {
  return (dispatch) => {
    const mis4aggindicator =
      "/api/indicators.json?dataSet=LDFlbqPCWfG&period=" +
      period +
      unionIds +
      "&orgUnitIdScheme=NAME";
    return dispatch({
      type: "FETCH_MIS4_INDICATORS_AGGR",
      payload: apiDev.get(mis4aggindicator),
    });
  };
}

export function fetchMIS4DataNgos(ids, period) {
  return (dispatch) => {
    const mis4aggrurl =
      "/api/dataValueSets.json?dataSet=LDFlbqPCWfG&period=" +
      period +
      ids +
      "&orgUnitIdScheme=NAME";
    // apiDev.get(mis4aggrurl).then(
    //     resp => {
    //         return dispatch({
    //             type: 'FETCH_MIS4_NGOS_AGGR_FULFILLED',
    //             payload: resp
    //         })
    //     },
    //     error => {
    //         return dispatch({
    //             type: 'FETCH_MIS4_NGOS_AGGR_REJECTED',
    //             payload: error
    //         })
    //     }
    // )
    return dispatch({
      type: "FETCH_MIS4_NGOS_AGGR",
      payload: apiDev.get(mis4aggrurl),
    });
  };
}

export function fetchMIS4DataMultiSectoral(ids, period) {
  return (dispatch) => {
    const mis4aggrurl =
      "/api/dataValueSets.json?dataSet=LDFlbqPCWfG&period=" +
      period +
      ids +
      "&orgUnitIdScheme=NAME";
    // apiDev.get(mis4aggrurl).then(
    //     resp => {
    //         console.log(resp);
    //         return dispatch({
    //             type: 'FETCH_MIS4_MULTISECTORAL_AGGR_FULFILLED',
    //             payload: resp
    //         })
    //     },
    //     error => {
    //         console.log(error);
    //         return dispatch({
    //             type: 'FETCH_MIS4_MULTISECTORAL_AGGR_REJECTED',
    //             payload: []
    //         })
    //     }
    // )
    return dispatch({
      type: "FETCH_MIS4_MULTISECTORAL_AGGR",
      payload: apiDev.get(mis4aggrurl),
    });
  };
}

export function mergeWithMIS4Total(arr) {
  return (dispatch) => {
    return dispatch({
      type: "MERGE_WITH_MIS4_TOTAL",
      payload: arr,
    });
  };
}

export function setReportHeader(zilla, upazila, month) {
  return (dispatch) => {
    return dispatch({
      type: "SET_REPORT_HEADER",
      zilla: zilla,
      upazila: upazila,
      month: month,
    });
  };
}

export function setIframeContent(h, c) {
  return async (dispatch) => {
    return dispatch({
      type: "SET_IFRAME_CONTENT",
      printcontent: c,
      head: h,
    });
  };
}

export function resetIframeContent() {
  return (dispatch) => {
    return dispatch({
      type: "RESET_IFRAME_CONTENT",
      printcontent: "",
    });
  };
}
//http://mchdrhis.icddrb.org:8080/dhis/api/29/dataSetReport?ds=LDFlbqPCWfG&pe=201801&ou=Zi6P8o5P4Vk
export function fetchMis5Data(upazilas, period) {
  return (dispatch) => {
    const dataArray = [];
    const mis5aggrurl =
      "http://fpdhis2.dgfp.gov.bd:8080/dhis/api/29/dataSetReport?ds=LDFlbqPCWfG&pe=" +
      period +
      "&ou=";

    upazilas.map((d, i) => {
      // Create a promise that handles 409 errors gracefully
      const requestPromise = apiDev
        .get(mis5aggrurl + d.id, {
          params: {
            upazilaName: d.name,
          },
        })
        .catch((error) => {
          // If we get a 409 Conflict error, return a resolved promise with error info
          if (error.response && error.response.status === 409) {
            console.warn(
              `409 Conflict error for upazila: ${d.name} (${d.id}) - Data may already be submitted or locked`
            );
            // Return a response-like object to maintain consistency
            return {
              data: [], // Empty data since we can't access the locked data
              config: {
                params: {
                  upazilaName: d.name,
                },
              },
              status: 409,
              error: "Data locked or already submitted",
            };
          }
          // For other errors, re-throw them so they can be handled upstream
          throw error;
        });

      dataArray.push(requestPromise);
    });

    return dispatch({
      type: "FETCH_MIS5_AGGR",
      payload: axios.all(dataArray),
    });
  };
}

export function setMis5Data(data, zillaName, month) {
  return (dispatch) => {
    return dispatch({
      type: "SET_MIS5_AGGR",
      payload: data,
      zillaName: zillaName,
      mis5Month: month,
    });
  };
}

//MIS4 GENERATION FROM MIS2, MIS3
export function fetchUserOrgUnits(orgUnitId) {
  return (dispatch) => {
    var url =
      "/api/29/organisationUnits.json?userOnly=true&fields=id,dataSets,displayName,children&paging=false";
    return dispatch({
      type: "FETCH_MIS4_ORGUNIT_BY_USER",
      payload: apiDev.get(url),
    });
  };
}

export function fetchUserDataViewZilla(mis2Id) {
  return (dispatch) => {
    var url = `/api/29/organisationUnits/${mis2Id}?includeAncestors=true&filter=level:eq:3`;
    return dispatch({
      type: "FETCH_MIS4_ORGUNIT_ZILLA_BY_USER",
      payload: apiDev.get(url),
    });
  };
}

export function fetchMis2DataSet(mis2OrgUnitList, period) {
  return (dispatch) => {
    var orgUnitIds = _.pluck(mis2OrgUnitList, "id").join("&orgUnit=");
    var dataSet = import.meta.env.VITE_MIS2_DATASET_ID;
    ///api/29/dataValueSets.json?dataSet=qlYSHtdGSh9&period=201903&orgUnit=BxkVHOsO8YB&orgUnit=LZc4ixAMG8u
    var url = `/api/29/dataValueSets.json?dataSet=${dataSet}&period=${period}&orgUnit=${orgUnitIds}`;
    return dispatch({
      type: "FETCH_MIS2_REPORT",
      payload: apiDev.get(url),
    });
  };
}

export function fetchMis3DataSet(mis3OrgUnitList, period) {
  return (dispatch) => {
    var orgUnitIds = _.pluck(mis3OrgUnitList, "id").join("&orgUnit=");
    var dataSet = import.meta.env.VITE_MIS3_DATASET_ID;
    var url = `/api/29/dataValueSets.json?dataSet=${dataSet}&period=${period}&orgUnit=${orgUnitIds}`;
    return dispatch({
      type: "FETCH_MIS3_REPORT",
      payload: apiDev.get(url),
    });
  };
}

export function addMIS4DataSet(data) {
  return (dispatch) => {
    return dispatch({
      type: "ADD_MIS4_DATASET_AGGR",
      payload: data,
    });
  };
}

export function fetchMIS5ReportMIS2(period, upazilas) {
  return (dispatch) => {
    console.log("🚀 fetchMIS5ReportMIS2 called");
    console.log("Period:", period);
    console.log("Upazilas:", upazilas);

    const dataArray = [];
    const dataSet = import.meta.env.VITE_MIS2_DATASET_ID;
    const mis5aggrurl = `http://fpdhis2.dgfp.gov.bd:8080/dhis/api/29/dataSetReport?ds=${dataSet}&pe=${period}&ou=`;

    upazilas.map((d, i) => {
      console.log(`Adding request for upazila ${i + 1}:`, d.name, d.id);
      dataArray.push(
        apiDev.get(mis5aggrurl + d.id, {
          params: {
            upazilaName: d.name,
          },
        })
      );
    });

    console.log(`Total API requests: ${dataArray.length}`);

    return dispatch({
      type: "FETCH_MIS5_MIS2",
      payload: axios.all(dataArray),
    });
  };
}

export function fetchMIS5ReportMIS3(period, upazilas) {
  return (dispatch) => {
    const dataArray = [];
    const dataSet = import.meta.env.VITE_MIS3_DATASET_ID;

    const mis5aggrurl = `http://fpdhis2.dgfp.gov.bd:8080/dhis/api/29/dataSetReport?ds=${dataSet}&pe=${period}&ou=`;
    upazilas.map((d, i) =>
      dataArray.push(
        apiDev.get(mis5aggrurl + d.id, {
          params: {
            upazilaName: d.name,
          },
        })
      )
    );
    return dispatch({
      type: "FETCH_MIS5_MIS3",
      payload: axios.all(dataArray),
    });
  };
}

export function setMis5DataAggr(mis2, mis3, zillaName, period) {
  return (dispatch) => {
    return dispatch({
      type: "SET_MIS5_MIS2_MIS3",
      mis2: mis2,
      mis3: mis3,
      zillaName: zillaName,
      period: period,
    });
  };
}
