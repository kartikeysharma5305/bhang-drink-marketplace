import { createSlice } from "@reduxjs/toolkit";
import allProducts from "./allProducts";

// Redux slice to render all the products
const productSlice = createSlice({
  name: "product",
  initialState: { products: allProducts },
  reducers: {
    fetchProduct: (state, action) => {
      return state;
    },
  },
});

export const { fetchProduct } = productSlice.actions;

export default productSlice.reducer;
