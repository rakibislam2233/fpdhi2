import { axiosGeneral } from ".";

export function setApiName(pageHeader) {
  return (dispatch) => {
    return dispatch({
      type: "TEST_GETME_HEADER",
      payload: pageHeader,
    });
  };
}

export function getTestApiMe(endpoint, method, data) {
  return (dispatch) => {
    return dispatch({
      type: "TEST_GETME",
      payload: axiosGeneral(endpoint, method, data),
    });
  };
}

export function addTestSampleCalculation(d) {
  return {
    type: "TEST_ADD_CALCULATION",
    payload: d,
  };
}
