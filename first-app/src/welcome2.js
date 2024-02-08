import { useState } from "react";

function Welcome2() {
  let [name, SetName] = useState("");

  return (
    <>
      <div className="App-header">
        Enter your Name :
        <input
          type="text"
          value={name}
          onChange={(e) => {
            SetName(e.target.value);
            console.log(e);
            console.log(e.target);
          }}
        ></input>
        <b>Welcome {name}</b>
      </div>
    </>
  );
}

export default Welcome2;
