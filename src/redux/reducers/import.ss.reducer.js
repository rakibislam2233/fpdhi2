/* eslint-disable indent */
import _ from "underscore";

const initialState = {
  orgUnit: [],
  modifiedOrgUnit: [],
  loading: false,
  dataResponseSS: [],
  dataResponseDhis2: [],
};

const importssreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SS_GET_ORG_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "SS_GET_ORG_REJECTED": {
      return {
        ...state,
        orgUnit: [],
        modifiedOrgUnit: [],
        loading: false,
      };
    }
    case "SS_GET_ORG_FULFILLED": {
      const orgUnit = action.payload.data.organisationUnits;
      const modifiedOrgUnit = [...orgUnit];
      modifiedOrgUnit.unshift({
        name: "All",
        displayName: "All",
        id: "1",
        code: "1",
      });
      return {
        ...state,
        orgUnit,
        modifiedOrgUnit,
        loading: false,
      };
    }
    case "SS_GET_SS_DATA_PENDING": {
      return {
        ...state,
        // loading: true,
      };
    }
    case "SS_GET_SS_DATA_REJECTED": {
      return {
        ...state,
        // loading: false,
      };
    }
    case "SS_GET_SS_DATA_FULFILLED": {
      return {
        ...state,
        // loading: false,
        dataResponseSS: [...state.dataResponseSS, action.payload],
      };
    }
    case "SS_RESET_SS_DATA": {
      return {
        ...state,
        dataResponseSS: [],
        // loading: false
      };
    }
    case "SS_PUSH_DHIS2_PENDING": {
      return {
        ...state,
        dataResponseDhis2: [],
        // loading: true
      };
    }
    case "SS_PUSH_DHIS2_FULFILLED": {
      // var orgUnit = JSON.parse(action.payload.config.data.orgUnit);
      var j = JSON.parse(action.payload.config.data);
      var n = _.pluck(
        _.where(state.orgUnit, {
          id: j.orgUnit,
        }),
        "displayName"
      );
      Object.assign(action.payload.data, {
        orgUnit: n[0],
      });
      return {
        ...state,
        dataResponseDhis2: [...state.dataResponseDhis2, action.payload.data],
        // loading: false
      };
    }
    case "SS_PUSH_DHIS2_REJECTED": {
      return {
        ...state,
        // loading: false
      };
    }
    case "SS_RESET_DHIS2_DATA": {
      return {
        ...state,
        dataResponseDhis2: [],
        loading: false,
      };
    }
    case "ENABLE_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "DISABLE_LOADING": {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default importssreducer;
