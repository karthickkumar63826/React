import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./CounterSlice";
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  let [value, setValue] = useState();

  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          {count}
          <button
            aria-label="Decrement-value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <br />
          Enter a value :{" "}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          {value && (
            <button onClick={() => dispatch(incrementByAmount(Number(value)))}>
              Increment By Value
            </button>
          )}
          <br />
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </>
  );
}
