import { combineReducers } from "@reduxjs/toolkit";
import nameReducer from "../slices/nameSlice";
import dataReducer from "../slices/dataSlice";
import cartReducer from "../slices/cartSlice";

const rootReducer = combineReducers({
  globalReducer: nameReducer,
  dataReducer: dataReducer,
  cartReducer: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
