import { useReducer, useState } from "react";

export default function CounterReducer() {
  let [InputValue, setInputValue] = useState();
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      case "Reset":
        return { count: 0 };
      case "IncrementByUserValue":
        setInputValue(0);
        return { count: state.count + action.payLoad };
      case "DecrementByUserValue":
        return { count: state.count - action.payLoad };
      default:
        return { count: state.count };
    }
  };

  let [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h3>Enter any number :</h3>
      <input
        type="text"
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      {state.count}
      <br />
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <br />
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "IncrementByUserValue",
            payLoad: Number(InputValue),
          })
        }
      >
        IncrementByUserValue
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "DecrementByUserValue",
            payLoad: Number(InputValue),
          })
        }
      >
        DecrementByUserValue
      </button>
      <br />
    </>
  );
}
