import { useState } from "react";

function Addition() {
  let [number1, setNumber1] = useState(0);
  let [number2, setNumber2] = useState(0);
  let [sum, setSum] = useState(0);

  function add() {
    setSum(number1 + number2);
  }

  return (
    <>
      <div className="App-header">
        Enter number1 :
        <input
          type="text"
          value={number1}
          onChange={(e) => {
            setNumber1(Number(e.target.value));
          }}
        ></input>
        <br />
        Enter number2 :
        <input
          type="text"
          value={number2}
          onChange={(e) => {
            setNumber2(Number(e.target.value));
          }}
        ></input>
        <br />
        <button onClick={() => add()}>Add</button>
        <br></br>
        Sum of {number1} and {number2} is {sum}
      </div>
    </>
  );
}

export default Addition;
