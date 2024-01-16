import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (category) => {
    try {
      const response = category
        ? await fetch(`https://fakestoreapi.com/products/category/${category}`)
        : await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error("Failed to fetch products");
    }
  }
);

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    throw Error("Failed to fetch products");
  }
});

export const fetchProductById = createAsyncThunk(
  "fetchPoduct",
  async (productId) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error("Failed to fetch product");
    }
  }
);

const initialState = {
  products: [],
  categories: [],
  selectedProduct: null,
  loading: false,
  selectedProductLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.selectedProductLoading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProductLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.selectedProductLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectProducts = () =>
  useSelector((state) => {
    return state.productsReducer.products;
  });

export const selectProduct = () =>
  useSelector((state) => {
    return state.productsReducer.selectedProduct;
  });

export const selectCategories = () =>
  useSelector((state) => {
    return state.productsReducer.categories;
  });

export const selectLoading = () =>
  useSelector((state) => {
    return state.productsReducer.loading;
  });

export const selectProductLoading = () =>
  useSelector((state) => {
    return state.productsReducer.selectedProductLoading;
  });

export default productSlice.reducer;
