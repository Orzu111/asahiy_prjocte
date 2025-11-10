import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    items: [],
  },
  reducers: {
    toggleLike: (state, action) => {
      const existingIndex = state.items.findIndex(item => item._id === action.payload._id);
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
      }
    },
    removeLike: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
  },
});

export const { toggleLike, removeLike } = likesSlice.actions;
export default likesSlice.reducer;
