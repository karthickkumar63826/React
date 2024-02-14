import { useState } from "react";

function ColorChange() {
  let [color, setColor] = useState("black");

  return (
    <>
      <select name="color" id="" onChange={(e) => setColor(e.target.value)}>
        <option value="black">black</option>
        <option value="Yellow">Yellow</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="purple">purple</option>
      </select>

      <p style={{ color: color }}>
        Welcome to my youtube channel your color is {color}
      </p>
    </>
  );
}

export default ColorChange;
