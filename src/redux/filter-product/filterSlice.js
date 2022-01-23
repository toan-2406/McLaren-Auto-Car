import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: [],
  sort: "All",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    categoryFilterChange: (state, action) => {
      state.category = action.payload;
    },
    sortFilterChange: (state, action) => {
      state.sort = action.payload;
    },
    clearFilterChange: (state, action) => {
      state.search = "";
      state.category = [];
      state.sort = "All";
    },
  },
});

export const {
  searchFilterChange,
  categoryFilterChange,
  clearFilterChange,
  sortFilterChange,
} = filterSlice.actions;
export default filterSlice.reducer;
