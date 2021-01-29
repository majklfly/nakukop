import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: any = {
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      const data = action.payload;
      const id = data.cartItems[1];
      if (!state[id]) {
        state[id] = { items: data.cartItems, amount: 1 };
      } else {
        state[id].amount += 1;
      }
      state.total = state.total + data.total;
    },
    updateCart(state, action: PayloadAction<any>) {
      const data = action.payload;
      const id = data.cartItems[1];
      if (state[id]) {
        state[id].amount -= 1;
      }
    },
  },
});

export const { addToCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
