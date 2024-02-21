import { useRef, useState } from "react";

export default function UseRefDemo3() {
  let ref = useRef();
  let [state, setState] = useState();

  function handleRef() {
    console.log(ref.current.value);
  }

  function handleState(e) {
    setState(e.target.value);
    console.log(state);
  }

  return (
    <>
      Ref Input : <input type="text" ref={ref} onChange={() => handleRef()} />
      <br></br>
      State Input :{" "}
      <input type="text" value={state} onChange={(e) => handleState(e)} />
      <br></br>
      ref Value : {ref.current.value}
      <br></br>
      State value : {}
    </>
  );
}
