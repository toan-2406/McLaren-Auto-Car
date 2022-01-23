import { configureStore } from "@reduxjs/toolkit";

import PostModalSlice from "../redux/post-modal/PostModalSlice";
import NavModelSlice from "../redux/nav-model/NavModelSlice";
import FilterSlice from "../redux/filter-product/filterSlice";

export const store = configureStore({
  reducer: {
    postModal: PostModalSlice,
    navModel: NavModelSlice,
    filter: FilterSlice,
  },
});
