import { createSlice } from '@reduxjs/toolkit';

const testApiSlice = createSlice({
  name: 'testapi',
  initialState: {
    apiName: '',
    apiResponse: {},
    sampleCalculation: '',
  },
  reducers: {
    setApiName: (state, action) => {
      state.apiName = action.payload;
    },
    setApiResponse: (state, action) => {
      state.apiResponse = action.payload;
    },
    setSampleCalculation: (state, action) => {
      state.sampleCalculation = action.payload;
    },
  },
});

export const { setApiName, setApiResponse, setSampleCalculation } = testApiSlice.actions;
export default testApiSlice.reducer;