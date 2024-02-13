import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

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
      <div className="form">
      <div className="Task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="task"
          placeholder="Please enter your task"
          className="input-box"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
      </form>
      </div>

      <div className="Task-list">

      {/* {todos.length < 1 ? (
        "You have no task to completed"
      ) : (
        <b>You have {todos.length} task to complete</b>
      )} */}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox"  onChange={() => updatecompleted(todo)} />
            <p className="task-list">{todo.completed ? <del>{todo.text}</del> : todo.text}</p>{" "}
            <Button onClick={() => deleteTodo(todo.id)} variant="secondary">
              <FaRegTrashCan color="black" />
            </Button>{" "}
            <Button onClick={() => updatedTodo(todo)} variant="danger">
              <FaEdit />
            </Button>
          </li>
        ))}
      </ul>
    </div>
      </div>
    </div>
  );
}

export default App;
