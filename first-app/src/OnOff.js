import { useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);

  return (
    <>
      <b>The button is {isOn ? "on" : "off"}</b>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}

export default Toggle;
