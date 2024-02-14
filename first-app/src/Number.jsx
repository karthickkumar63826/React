import { useState } from "react";

function EvenOrOdd() {
  let [number, setNumber] = useState(0);

  const output = () => {
    if (number % 2 === 0) {
      return "EVEN";
    } else {
      return "ODD";
    }
  };

  return (
    <>
      <label htmlFor="num">Enter any Number </label>
      <input
        type="text"
        id="num"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Entered number is an {output()}</p>
    </>
  );
}

export default EvenOrOdd;
