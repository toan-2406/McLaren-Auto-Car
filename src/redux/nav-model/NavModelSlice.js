import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  isOpen: false,
};

export const NavModelSlice = createSlice({
  name: "navModel",
  initialState,
  reducers: {
    set: (state, action) => {
      state.product = action.payload;
      state.isOpen = !state.isOpen;
    },
    remove: () => {
      return initialState;
    },
  },
});

export const { set, remove } = NavModelSlice.actions;
export default NavModelSlice.reducer;
