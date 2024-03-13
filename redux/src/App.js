import "./App.css";
import TodoComponent from "./Todos/TodoComponent";
import { Counter } from "./example1/counter";
import ArithmeticComponent from "./example2/ArithmeticComponent";

function App() {
  return (
    <>
      <div className="App">
        {/* <h1>Counter</h1>
        <Counter />
        <ArithmeticComponent /> */}
        <TodoComponent />
      </div>
    </>
  );
}

export default App;
