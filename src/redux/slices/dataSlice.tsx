import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: any = {};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state: any, action: PayloadAction<any>) {
      const data = action.payload;
      data.data.Value.Goods.forEach((item: any) => {
        const id = item.T;
        state[id] = item;
      });
    },
    updateData(state, action: PayloadAction<any>) {
      const info = action.payload;
      const id = info.good[7];
      state[id].C = info.good[1];
      state[id].P = info.good[2] - 1;
      state[id].B = info.good[3];
      state[id].CV = info.good[4];
      state[id].G = info.good[5];
      state[id].Pl = info.good[6];
      state[id].T = info.good[7];
    },
    incrementStock(state, action: PayloadAction<any>) {
      const data = action.payload;
      const id = data.item[7];
      console.log(id);
      if (state[id]) {
        state[id].P = state[id].P + 1;
      }
    },
  },
});

export const { getData, updateData, incrementStock } = dataSlice.actions;

export default dataSlice.reducer;
