import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCost: 0,
    quantityTotal: 0,
  },
  reducers: {
    addCartItem(state, action) {
      state.items.push(action.payload);
    },
    removeCartItem(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
    },
    incrementCartItem(state, action) {
      const item = state.items.find((item) => item._id === action.payload);
      item.quantity += 1;
    },
    decrementCartItem(state, action) {
      const item = state.items.find((item) => item._id === action.payload);
      item.quantity = item.quantity > 1 ? item.quantity - 1 : 1;
    },
    totalSum(state) {
      state.totalCost = state.items.reduce(function (currentTotal, item) {
        return currentTotal + item.price * item.quantity;
      }, 0);
    },
    itemsQuantity(state) {
      state.quantityTotal = state.items.reduce(function (current, item) {
        return current + item.quantity;
      }, 0);
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
  totalSum,
  itemsQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
