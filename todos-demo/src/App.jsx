import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function App() {
  let [todos, setTodos] = useState([]); // array of todos
  let [todoInput, setTodoInput] = useState(""); // input
  let [editTodo, setEditTodo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent form refresh/reload
    if (editTodo.id) {
      const updateTodos = todos.map((todo) => {
        if (todo.id === editTodo.id) {
          return { ...todo, text: todoInput };
        } else {
          return todo;
        }
      });

      setTodos(updateTodos);
      console.log(todos);
      setEditTodo({});
    } else {
      const addTool = {
        id: uuidv4(),
        text: todoInput,
        completed: false,
      };

      todos.push(addTool);
      setTodos(todos);
      console.log(todos);
    }

    setTodoInput("");
  };

  const deleteTodo = (id) => {
    console.log(id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  const updatedTodo = (todo) => {
    setTodoInput(todo.text);
    setEditTodo(todo);
  };

  const updatecompleted = (completedTodo) => {
    const updateTodo = todos.map((todo) => {
      if (completedTodo.id === todo.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(updateTodo);
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
        "You have no task to completed"
      ) : (
        <b>You have {todos.length} task to complete</b>
      )}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ listStyle: "none" }}>
            <input type="checkbox" onChange={() => updatecompleted(todo)} />
            {todo.completed ? <del>{todo.text}</del> : todo.text}{" "}
            <button onClick={() => deleteTodo(todo.id)}>
              <FaRegTrashCan />
            </button>
            <button onClick={() => updatedTodo(todo)}>
              <FaEdit />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
