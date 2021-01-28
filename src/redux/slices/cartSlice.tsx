import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cart {
  cartItems: any[][];
  total: number;
}

let initialState: cart = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<cart>) {
      const data = action.payload;
      state.cartItems = [...state.cartItems, data.cartItems];
      state.total = state.total + data.total;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
