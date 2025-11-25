import { createSlice } from '@reduxjs/toolkit';

const importSsSlice = createSlice({
  name: 'importss',
  initialState: {
    orgUnit: [],
    modifiedOrgUnit: [],
    dataResponseSS: [],
    dataResponseDhis2: [],
    loading: false,
  },
  reducers: {
    setOrgUnit: (state, action) => {
      state.orgUnit = action.payload;
    },
    setModifiedOrgUnit: (state, action) => {
      state.modifiedOrgUnit = action.payload;
    },
    setDataResponseSS: (state, action) => {
      state.dataResponseSS = action.payload;
    },
    setDataResponseDhis2: (state, action) => {
      state.dataResponseDhis2 = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetSSData: (state) => {
      state.dataResponseSS = [];
    },
    resetDhis2Data: (state) => {
      state.dataResponseDhis2 = [];
    },
    enableLoading: (state) => {
      state.loading = true;
    },
    disableLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { 
  setOrgUnit, 
  setModifiedOrgUnit, 
  setDataResponseSS, 
  setDataResponseDhis2, 
  setLoading,
  resetSSData,
  resetDhis2Data,
  enableLoading,
  disableLoading
} = importSsSlice.actions;
export default importSsSlice.reducer;