import { createSlice } from '@reduxjs/toolkit';

const misFormSlice = createSlice({
  name: 'misform',
  initialState: {
    mis4Data: [],
    mis5Data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setMis4Data: (state, action) => {
      state.mis4Data = action.payload;
    },
    setMis5Data: (state, action) => {
      state.mis5Data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMis4Data, setMis5Data, setLoading, setError } = misFormSlice.actions;
export default misFormSlice.reducer;