import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
  isOpen: false,
};

export const PostModalSlice = createSlice({
  name: "postModal",
  initialState,
  reducers: {
    set: (state, action) => {
      state.post = action.payload;
      state.isOpen = true;
    },
    remove: () => {
      return initialState;
    },
  },
});

export const { set, remove } = PostModalSlice.actions;
export default PostModalSlice.reducer;
