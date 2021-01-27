import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface goods {
  goods: object;
}

let initialState: goods = {
  goods: {},
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateGoods(state, action: PayloadAction<goods>) {
      const { goods } = action.payload;
      state.goods = goods;
    },
  },
});

export const { updateGoods } = globalSlice.actions;

export default globalSlice.reducer;
