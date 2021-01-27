import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface goods {
  res: {
    1: object;
    2: object;
    5: object;
    8: object;
    10: object;
    15: object;
  };
}

interface data {
  data: {
    res: {
      1: object;
      2: object;
      5: object;
      8: object;
      10: object;
      15: object;
    };
  };
}

let initialState: data = {
  data: {
    res: {
      1: {},
      2: {},
      5: {},
      8: {},
      10: {},
      15: {},
    },
  },
};

const nameSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateGoods(state, action: PayloadAction<goods>) {
      const data = action.payload;
      state.data = data;
    },
  },
});

export const { updateGoods } = nameSlice.actions;

export default nameSlice.reducer;
