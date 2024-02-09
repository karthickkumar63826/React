import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaRegTrashCan } from "react-icons/fa6";

function App() {
  let [todos, setTodos] = useState([]); // array of todos
  let [todoInput, setTodoInput] = useState(""); // input

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent form refresh/reload

    const addTool = {
      id: uuidv4(),
      text: todoInput,
      complete: false,
    };

    todos.push(addTool);
    setTodos(todos);
    console.log(todos);
    setTodoInput("");
  };

  const deleteTodo = (id) => {
    console.log(id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task"> Enter your Task </label>

        <input
          type="text"
          id="task"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
      </form>

      <br />

      {todos.length < 1 ? (
        "You have no task to complete"
      ) : (
        <b>You have {todos.length} task to complete</b>
      )}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ listStyle: "none" }}>
            {todo.text}{" "}
            <button onClick={() => deleteTodo(todo.id)}>
              <FaRegTrashCan />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
