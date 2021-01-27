import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface response {
  data: {
    Error?: string;
    Id?: number;
    Success?: boolean;
    Value?: object;
  };
}

let initialState: response = {
  data: {
    Error: "",
    Id: 0,
    Success: true,
    Value: {},
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action: PayloadAction<object>) {
      const data = action.payload;
      state.data = data;
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
