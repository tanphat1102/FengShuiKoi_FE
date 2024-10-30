import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import useReducer from "./features/userSlide";

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: useReducer,
});
