import { useState } from "react";
import List from "./List";

export default function MemoDemo4() {
  let [number, setNumber] = useState(1);
  let [dark, setDark] = useState(false);

  let getMultiples = (number) => {
    return [number, number * 2, number * 3];
  };

  const toggleStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <div style={toggleStyle}>
        Enter Number <br></br>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <br />
        <button onClick={() => setDark(!dark)}>ToggleTheme</button>
        <List getMultiples={getMultiples}></List>
      </div>
    </>
  );
}
