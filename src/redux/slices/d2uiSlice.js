import { createSlice } from '@reduxjs/toolkit';

const d2uiSlice = createSlice({
  name: 'd2ui',
  initialState: {
    d2: null,
    userDataViewZillaCode: null,
  },
  reducers: {
    addD2uiReference: (state, action) => {
      state.d2 = action.payload;
    },
    setUserDataViewZillaCode: (state, action) => {
      state.userDataViewZillaCode = action.payload;
    },
  },
});

export const { addD2uiReference, setUserDataViewZillaCode } = d2uiSlice.actions;
export default d2uiSlice.reducer;