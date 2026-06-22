import { createSlice } from "@reduxjs/toolkit";

let nextIdx = 2;
const todoSlice = createSlice({
  name: "myTodos",
  initialState: [{ idx: 1, contents: "리덕스 툴킷 공부", done: false }],
  reducers: {
    addTodo: (prev, action) => {
      prev.push({ idx: nextIdx++, contents: action.payload, done: false });
    },
    toggleTodo: (prev, action) => {
      const todoRow = prev.find((t) => t.idx === action.payload);
      if (todoRow) todoRow.done = !todoRow.done;
    },
    deleteTodo: (prev, action) => {
      return prev.filter((state) => state.idx !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
