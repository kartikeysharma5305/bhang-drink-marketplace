// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Redux slice for managing the shopping cart state
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array of cart items: { id, title, price, quantity, totalPrice, image, realPrice }
    totalQuantity: 0, // Total number of items in the cart
    totalAmount: 0, // Total price of all items in the cart
  },
  reducers: {
    // Add a new item to the cart or increase quantity if it already exists
    increment: (state, action) => {
      const { id, title, price, image, realPrice } = action.payload;

      // Validate payload
      if (!id || !title || price == null) return;

      // Check if the item already exists in the cart
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // If it exists, increase its quantity and update totalPrice
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // If not, add it as a new item
        state.items.push({
          id,
          title,
          price, // Discounted price from Shop
          quantity: 1,
          totalPrice: price,
          image,
          realPrice,
        });
      }

      // Update cart totals
      state.totalQuantity += 1;
      state.totalAmount += price;
    },

    // Remove an item from the cart entirely
    decrement: (state, action) => {
      const id = action.payload;

      // Validate payload
      if (!id) return;

      // Find the item to remove
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update cart totals before removing
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        // Remove the item from the cart
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    // Increase the quantity of a specific item in the cart
    increaseQuantity: (state, action) => {
      const id = action.payload;

      // Validate payload
      if (!id) return;

      // Find the item to update
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
      }
    },

    // Decrease the quantity of a specific item in the cart
    decreaseQuantity: (state, action) => {
      const id = action.payload;

      // Validate payload
      if (!id) return;

      // Find the item to update
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;

        // If quantity drops to 0 or below, remove the item from the cart
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
  },
});

// Export action creators and reducer
export const { increment, decrement, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
