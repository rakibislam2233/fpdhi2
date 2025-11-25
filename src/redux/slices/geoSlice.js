import { createSlice } from '@reduxjs/toolkit';

const geoSlice = createSlice({
  name: 'geo',
  initialState: {
    zilla: [],
    upazilla: [],
    union: [],
    loading: false,
  },
  reducers: {
    setZillas: (state, action) => {
      state.zilla = action.payload;
    },
    setUpazillas: (state, action) => {
      state.upazilla = action.payload;
    },
    setUnions: (state, action) => {
      state.union = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setZillas, setUpazillas, setUnions, setLoading } = geoSlice.actions;
export default geoSlice.reducer;