// src/store/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Redux slice for managing filter state (category, sort, price range)
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    selectedCategory: "all",
    sortOption: "recommended",
    minPrice: 100,
    maxPrice: 1000,
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
  },
});

export const { setCategory, setSortOption, setPriceRange } =
  filterSlice.actions;
export default filterSlice.reducer;
