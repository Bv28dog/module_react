import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const shoppingSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, { payload }) => {
      const existingProductIndex = state.findIndex(
        (product) => product.id === payload.id
      );
      if (existingProductIndex >= 0) {
        state[existingProductIndex].qty = state[existingProductIndex].qty + 1;
      } else {
        state.push({ ...payload, qty: 1 });
      }
    },
    increaseQty: (state, { payload }) => {
      const existingProductIndex = state.findIndex(
        (product) => product.id === payload.id
      );
      if (existingProductIndex >= 0) {
        state[existingProductIndex].qty = state[existingProductIndex].qty + 1;
      }
      
    },
    decreaseQty: (state, { payload }) => {
      const existingProductIndex = state.findIndex(
        (product) => product.id === payload.id
      );
      if (existingProductIndex >= 0 && state[existingProductIndex].qty > 1) {
        state[existingProductIndex].qty = state[existingProductIndex].qty - 1;
      }
      
    },
    deleteProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addProduct, deleteProduct, increaseQty, decreaseQty } =
  shoppingSlice.actions;

export const shoppingReducer = shoppingSlice.reducer;


export const selectCartItemsCount = () =>
  useSelector((state) =>
    state.shoppingReducer.reduce(
      (total, product) => total + product.qty,0
    )
  );

export const useShoppingSelector = () =>
  useSelector((state) => {
    return state.shoppingReducer;
  });
