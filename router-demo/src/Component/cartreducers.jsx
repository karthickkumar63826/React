import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  cart: [],
  cartIndex: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let cartItem = {
        cartId: state.cartIndex++,
        product: action.payload,
      };
      state.cart.push(cartItem);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((c) => c.cartId != action.payload);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
