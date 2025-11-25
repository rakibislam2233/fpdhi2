import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navBar',
  initialState: {
    toggleOpen: false,
  },
  reducers: {
    navbarToggle: (state) => {
      state.toggleOpen = !state.toggleOpen;
    },
  },
});

export const { navbarToggle } = navbarSlice.actions;
export default navbarSlice.reducer;
