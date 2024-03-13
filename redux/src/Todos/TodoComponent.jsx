import React from "react";
import { useState } from "react";
import { addTodo, deleteTodo, toggleComplete, editTodo } from "./TodoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TodoComponent() {
  let [text, setText] = useState("");
  let [isEditable, setIsEditable] = useState(false);
  let [todo, setTodo] = useState({});

  let dispatch = useDispatch();
  const data = useSelector((state) => state.todo);

  const handleEdit = (t) => {
    setText(t.title);
    setTodo(t);
    setIsEditable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditable) {
      dispatch(addTodo(text));
      setText("");
    } else {
      dispatch(editTodo({todo, text}));
      setIsEditable(false);
      setText(" ");
    }
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
              {todo.title} {todo.toggleComplete ? "Completed" : "Not Completed"}{" "}
              {"  "}
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(toggleComplete(todo))}>
                Toggle
              </button>
              <button onClick={() => handleEdit(todo)}>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <h3> No Task is assigned</h3>
      )}
    </>
  );
}
