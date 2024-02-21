import { useEffect, useRef, useState } from "react";

export default function UseRefDemo2() {
  let countRef = useRef(0);

  let [countState, setCountState] = useState(0);

  useEffect(() => {
    countRef.current = 1;
    console.log(countRef.current);
  }, []);

  useEffect(() => {
    console.log(countState);
  }, [countState]);

  function handleCount() {
    let count = countState + 1;
    setCountState(count);
  } 
  return (
    <>
      useState and useRef
      <button onClick={() => handleCount()}>click me {countState}</button>
    </>
  );
}
