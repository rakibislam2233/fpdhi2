import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "./api/baseApi";

// Simple reducer for UI state that doesn't fit in RTK Query
const uiStateReducer = (
  state = {
    navBar: { toggleOpen: false },
    misForm4Aggr: {
      userDataViewZilla: "",
      month: "",
      userOrgUnits: [],
      mis2reportdata: [],
      mis3reportdata: [],
      mis4FinalDataAggr: {},
      loading: false,
    },
    importssreducer: {
      orgUnit: [],
      modifiedOrgUnit: [],
      dataResponseSS: [],
      dataResponseDhis2: [],
      loading: false,
    },
  },
  action
) => {
  switch (action.type) {
    case "navbar/TOGGLE":
      return {
        ...state,
        navBar: { toggleOpen: !state.navBar.toggleOpen },
      };
    case "misform4/SET_USER_DATA_VIEW_ZILLA":
      return {
        ...state,
        misForm4Aggr: {
          ...state.misForm4Aggr,
          userDataViewZilla: action.payload,
        },
      };
    case "misform4/SET_MONTH":
      return {
        ...state,
        misForm4Aggr: { ...state.misForm4Aggr, month: action.payload },
      };
    case "misform4/SET_USER_ORG_UNITS":
      return {
        ...state,
        misForm4Aggr: { ...state.misForm4Aggr, userOrgUnits: action.payload },
      };
    case "misform4/SET_MIS2_REPORT_DATA":
      return {
        ...state,
        misForm4Aggr: { ...state.misForm4Aggr, mis2reportdata: action.payload },
      };
    case "misform4/SET_MIS3_REPORT_DATA":
      return {
        ...state,
        misForm4Aggr: { ...state.misForm4Aggr, mis3reportdata: action.payload },
      };
    case "misform4/SET_FINAL_DATA_AGGR":
      return {
        ...state,
        misForm4Aggr: {
          ...state.misForm4Aggr,
          mis4FinalDataAggr: action.payload,
        },
      };
    case "misform4/SET_LOADING":
      return {
        ...state,
        misForm4Aggr: { ...state.misForm4Aggr, loading: action.payload },
      };
    case "importss/SET_ORG_UNIT":
      return {
        ...state,
        importssreducer: { ...state.importssreducer, orgUnit: action.payload },
      };
    case "importss/SET_MODIFIED_ORG_UNIT":
      return {
        ...state,
        importssreducer: {
          ...state.importssreducer,
          modifiedOrgUnit: action.payload,
        },
      };
    case "importss/SET_SS_DATA":
      return {
        ...state,
        importssreducer: {
          ...state.importssreducer,
          dataResponseSS: action.payload,
        },
      };
    case "importss/SET_DHIS2_DATA":
      return {
        ...state,
        importssreducer: {
          ...state.importssreducer,
          dataResponseDhis2: action.payload,
        },
      };
    case "importss/SET_LOADING":
      return {
        ...state,
        importssreducer: { ...state.importssreducer, loading: action.payload },
      };
    case "importss/RESET_SS_DATA":
      return {
        ...state,
        importssreducer: { ...state.importssreducer, dataResponseSS: [] },
      };
    case "importss/RESET_DHIS2_DATA":
      return {
        ...state,
        importssreducer: { ...state.importssreducer, dataResponseDhis2: [] },
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    ui: uiStateReducer, // Simple UI state management
    d2ui: (state = { token: null, userDataViewZillaCode: "01" }, action) => {
      switch (action.type) {
        case "SET_TOKEN":
          return { ...state, token: action.payload };
        case "SET_USER_DATA_VIEW_CODE":
          return { ...state, userDataViewZillaCode: action.payload };
        default:
          return state;
      }
    },
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
