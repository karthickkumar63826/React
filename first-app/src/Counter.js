import { useState } from "react";
import "./Counter.css";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <button onClick={() => setCount(--count)} className="btn">
          -
        </button>
        <span className="count">{count}</span>
        <button onClick={() => setCount(++count)} className="btn">
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
