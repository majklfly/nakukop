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
      const id = data.cartItems[7];
      if (!state[id]) {
        state[id] = { items: data.cartItems, amount: 1 };
      } else {
        state[id].amount += 1;
      }
      state.total = state.total + data.total;
    },
    updateCart(state, action: PayloadAction<any>) {
      const data = action.payload;
      console.log("data", data);
      const id = data.cartItems[7];
      const value = data.cartItems[1];
      if (state[id]) {
        state[id].amount -= 1;
        state.total -= value;
      }
    },
  },
});

export const { addToCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
