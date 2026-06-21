import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "mycounter", // slice 이름
  initialState: {
    myValue: 0,
  },
  reducers: {
    // reducer 함수의 액션 부분
    increment: (state) => {
      state.myValue += 1;
    },
    deceremnet: (state) => {
      state.myValue -= 1;
    },
    reset: (state) => {
      state.myValue = 0;
    },
  },
});

export const { increment, deceremnet, reset } = counterSlice.actions;
export default counterSlice.reducer;
