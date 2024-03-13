import { combineSlices, createSlice } from "@reduxjs/toolkit";

let initialState = {
  todos: [],
  index: 0,
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        complete: false,
        title: action.payload,
        id: state.index++,
      };
      state.todos.push(newTodo);
      console.log(newTodo);
      console.log(state.todos);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },

    toggleComplete: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.complete = !todo.complete;
          return todo;
        } else return todo;
      });
      console.log(state.todos);
    },

    
  },
});

export const { addTodo, deleteTodo, toggleComplete } = TodoSlice.actions;
export default TodoSlice.reducer;
