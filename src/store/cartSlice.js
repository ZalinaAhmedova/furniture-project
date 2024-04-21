import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCost: 0,
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
      item.quantity > 1 ? (item.quantity -= 1) : item.quantity;
    },
    calculateTotal(state) {
      let total = 0;
      state.items.forEach((item) => (total += item.price * item.quantity));
      state.totalCost = total;
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
