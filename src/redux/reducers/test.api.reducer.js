const initialState = {
  apiName: "",
  apiResponse: {},
  sampleCalculation: "",
};

const testapireducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST_GETME_HEADER": {
      return {
        ...state,
        apiName: action.payload,
      };
    }
    case "TEST_GETME_PENDING": {
      return {
        ...state,
        apiResponse: {},
      };
    }
    case "TEST_GETME_FULFILLED": {
      return {
        ...state,
        apiResponse: action.payload.data,
      };
    }
    case "TEST_ADD_CALCULATION": {
      return {
        ...state,
        sampleCalculation: action.payload,
      };
    }
    case "TEST_REMOVE_CALCULATION": {
      return {
        ...state,
        sampleCalculation: "",
      };
    }
    default:
      return state;
  }
};

export default testapireducer;
