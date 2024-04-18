import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem(state, action) {
      state.cartItems.push(action.payload);
    },
    removeCartItem(state, action) {},
    incrementCartItem(state, action) {},
    decrementCartItem(state, action) {},
  },
});

export const {
  addCartItem,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
