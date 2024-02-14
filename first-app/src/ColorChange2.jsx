import { useState } from "react";

function ColorTemplate() {
  let [color, setColor] = useState("white");

  return (
    <>
      <div className="App">
        Enter any color
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: color,
            textAlign: "center",
            border: "2px solid black",
          }}
        >
          {color}
        </div>
      </div>
    </>
  );
}

export default ColorTemplate;
