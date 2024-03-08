import logo from "./logo.svg";
import "./App.css";
import ClassBasedComponents from "./ClassComponents/MyClassComponent";
import ClassIncrement from "./ClassComponents/ClassIncrement";
import TimerClass from "./ClassComponents/TimerClass";

function App() {
  return (
    <div className="App">
      {/* <ClassBasedComponents></ClassBasedComponents> */}
      {/* <ClassIncrement/> */}
      <TimerClass />
    </div>
  );
}

export default App;
