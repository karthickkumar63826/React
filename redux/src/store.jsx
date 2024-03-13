import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./example1/CounterSlice";
import arithmeticReducer from "./example2/ArithmeticSlice";
import todoReducer from "./Todos/TodoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    arithmetic: arithmeticReducer,
    todo: todoReducer,
  },
});
