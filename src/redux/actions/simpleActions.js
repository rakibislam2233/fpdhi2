// Simple action creators for the streamlined Redux store
// These can be replaced with RTK Query mutations in future refactoring

export const navbarToggle = () => ({
  type: "navbar/TOGGLE",
});

// MIS Form 4 actions
export const setUserDataViewZilla = (payload) => ({
  type: "misform4/SET_USER_DATA_VIEW_ZILLA",
  payload,
});

export const setMonth = (payload) => ({
  type: "misform4/SET_MONTH",
  payload,
});

export const setUserOrgUnits = (payload) => ({
  type: "misform4/SET_USER_ORG_UNITS",
  payload,
});

export const setMis2ReportData = (payload) => ({
  type: "misform4/SET_MIS2_REPORT_DATA",
  payload,
});

export const setMis3ReportData = (payload) => ({
  type: "misform4/SET_MIS3_REPORT_DATA",
  payload,
});

export const setFinalDataAggr = (payload) => ({
  type: "misform4/SET_FINAL_DATA_AGGR",
  payload,
});

export const setLoading = (payload) => ({
  type: "misform4/SET_LOADING",
  payload,
});

// Import Service State actions
export const setOrgUnit = (payload) => ({
  type: "importss/SET_ORG_UNIT",
  payload,
});

export const setModifiedOrgUnit = (payload) => ({
  type: "importss/SET_MODIFIED_ORG_UNIT",
  payload,
});

export const setSSData = (payload) => ({
  type: "importss/SET_SS_DATA",
  payload,
});

export const setDhis2Data = (payload) => ({
  type: "importss/SET_DHIS2_DATA",
  payload,
});

export const enableLoading = () => ({
  type: "importss/SET_LOADING",
  payload: true,
});

export const disableLoading = () => ({
  type: "importss/SET_LOADING",
  payload: false,
});

export const resetSSData = () => ({
  type: "importss/RESET_SS_DATA",
});

export const resetDhis2Data = () => ({
  type: "importss/RESET_DHIS2_DATA",
});

export const send2Dhis2SS = (url, payload) => ({
  type: "importss/SEND_TO_DHIS2",
  payload: { url, data: payload },
});
