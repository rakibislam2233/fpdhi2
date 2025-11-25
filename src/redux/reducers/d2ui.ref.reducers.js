import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  d2ui: {},
  userDataViewZillaCode: {},
};

const d2uiSlice = createSlice({
  name: "d2ui",
  initialState,
  reducers: {
    addD2uiReference: (state, action) => {
      return { ...state, d2ui: action.payload };
    },
    getD2uiReference: (state) => {
      return state;
    },
    setUserDataViewZillaCode: (state, action) => {
      const d = action.payload?.data?.organisationUnits || [];
      let upazilaCode = "";
      if (d.length) {
        let c = d[0].code;
        upazilaCode = c[2] + c[3];
      } else {
        upazilaCode = "Empty";
      }
      return {
        ...state,
        userDataViewZillaCode: upazilaCode,
      };
    },
  },
});

export const { addD2uiReference, getD2uiReference, setUserDataViewZillaCode } =
  d2uiSlice.actions;
export default d2uiSlice.reducer;
