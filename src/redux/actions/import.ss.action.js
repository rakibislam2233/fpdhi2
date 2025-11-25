import { axiosGeneral } from ".";

export function getOrgUnit(url) {
  return (dispatch) =>
    dispatch({
      type: "SS_GET_ORG",
      payload: axiosGeneral(url, "GET"),
    });
}

export function getSSData(url, data, header) {
  return (dispatch) =>
    dispatch({
      type: "SS_GET_SS_DATA",
      payload: axiosGeneral(url, "POST", data, true, false, header),
    });
}

export function resetSSData() {
  return {
    type: "SS_RESET_SS_DATA",
  };
}

export function send2Dhis2SS(url, data) {
  return (dispatch) =>
    dispatch({
      type: "SS_PUSH_DHIS2",
      payload: axiosGeneral(url, "POST", data),
    });
}

export function resetDhis2Data() {
  return {
    type: "SS_RESET_DHIS2_DATA",
  };
}

export function enableLoading() {
  return {
    type: "ENABLE_LOADING",
  };
}

export function disableLoading() {
  return {
    type: "DISABLE_LOADING",
  };
}

export function another() {
  return "";
}
