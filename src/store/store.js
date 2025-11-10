import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import likesReducer from "./likesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    likes: likesReducer,
  },
});
