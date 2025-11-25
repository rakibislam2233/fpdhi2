const initialState = {
  zilla: [],
  loading: false,
  upazilas: [],
  unions: [],
  pouroshovas: [],
  sadars: [],
  govorgs: [],
  ngos: [],
  multisectorals: [],
  userZilla: [],
  userUpazila: [],
  message: {},
};

const getGeoCodes = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ZILLAS_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_ZILLAS_FULFILLED": {
      return {
        ...state,
        loading: false,
        zilla: action.payload.data.organisationUnits,
      };
    }
    case "FETCH_ZILLA_BY_USER_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_ZILLA_BY_USER_FULFILLED": {
      return {
        ...state,
        loading: false,
        userZilla: action.payload.data.organisationUnits,
      };
    }
    case "FETCH_UPAZILAS_BY_PARENT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_UPAZILAS_BY_PARENT_FULFILLED": {
      return {
        ...state,
        loading: false,
        upazilas: action.payload.data.organisationUnits,
      };
    }
    case "FETCH_UNIONS_BY_PARENT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_UNIONS_BY_PARENT_FULFILLED": {
      return {
        ...state,
        loading: false,
        unions: action.payload.data.organisationUnits,
      };
    }
    case "FETCH_POUROSHOVA_BY_PARENT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_POUROSHOVA_BY_PARENT_FULFILLED": {
      return {
        ...state,
        loading: false,
        pouroshovas: action.payload.data.organisationUnits,
      };
    }
    case "FETCH_SADAR_BY_PARENT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_SADAR_BY_PARENT_FULFILLED": {
      return {
        ...state,
        loading: false,
        sadars: action.payload.data.organisationUnits,
      };
    }
    case "FETCH_GOV_BY_PARENT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_GOV_BY_PARENT_FULFILLED": {
      return {
        ...state,
        loading: false,
        govorgs: action.payload.data.organisationUnits,
      };
    }
    case "FEFETCH_NGOS_BY_PARENT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_NGOS_BY_PARENT_FULFILLED": {
      return {
        ...state,
        loading: false,
        ngos: action.payload.data.organisationUnits,
      };
    }
    case "FETCH_MULTISECTORAL_BY_PARENT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MULTISECTORAL_BY_PARENT_FULFILLED": {
      return {
        ...state,
        loading: false,
        multisectorals: action.payload.data.organisationUnits,
      };
    }
    case "FETCH_UPAZILA_BY_USER_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_UPAZILA_BY_USER_FULFILLED": {
      return {
        ...state,
        loading: false,
        userUpazila: action.payload.data.organisationUnits,
      };
    }
    default:
      return state;
  }
};

export default getGeoCodes;
