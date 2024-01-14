import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import { shoppingReducer } from "./shoppingSlice";

export const store = configureStore({
  reducer: {
    productsReducer,
    shoppingReducer,
  },
});
