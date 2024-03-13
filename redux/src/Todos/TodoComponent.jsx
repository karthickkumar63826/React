import React from "react";
import { useState } from "react";
import { addTodo, deleteTodo, toggleComplete } from "./TodoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TodoComponent() {
  let [text, setText] = useState("");

  let dispatch = useDispatch();
  const data = useSelector((state) => state.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <div>
        <h1>Todo By using Redux</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit"> Submit</button>
        </form>
      </div>
      {data.todos.length > 0 ? (
        <ul style={{ listStyle: "none" }}>
          {data.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}{" "}
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(toggleComplete(todo.id))}>
                Toggle
              </button>
              <button onClick={() => dispatch()}>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <h3> No Task is assigned</h3>
      )}
    </>
  );
}
