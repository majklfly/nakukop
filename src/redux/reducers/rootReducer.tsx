import { combineReducers } from "@reduxjs/toolkit";
import nameReducer from "../slices/nameSlice";
import dataReducer from "../slices/dataSlice";

const rootReducer = combineReducers({
  globalReducer: nameReducer,
  dataReducer: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
