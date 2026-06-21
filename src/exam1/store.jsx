import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couterSlice";

// configureStore 함수를 통해 reducer를 등록하고 있음
export const store = configureStore({
  reducer: {
    myCounter: counterReducer,
  },
});
