import { useMemo, useState } from "react";

export default function MemoDemo3() {
  let [num, setNum] = useState(2);
  const square = (num) => {
    console.log("calc");
    return num * 2;
  };

  const result = useMemo(() => square(num), [num]);

  return (
    <>
      {result} <br />
      <button onClick={() => setNum((preValue) => preValue + 1)}>
        Update me
      </button>
      <br />
      <button onClick={() => setNum(num)}>Same Number</button>
    </>
  );
}
