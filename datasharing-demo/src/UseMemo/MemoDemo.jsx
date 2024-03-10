import { useEffect, useMemo, useState } from "react";
import MemoDemo2 from "./MemoDemo2";


function expensivseCalculation(num) {
  for (let i = 0; i < 1000000; i += 50) {}
  return num * 2;
}

export default function MemoDemo() {
  let [number, setNumber] = useState();
  let [dark, setDark] = useState(false);
  let Double = useMemo(() => {
    return expensivseCalculation(number);
  }, [number]);

    const themeStyle = useMemo(() => {
      return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60px",
      };
    }, [dark]);

//   const themeStyle = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "60px",
//   };

  useEffect(() => {
    console.log("Theme Toggle");
  }, [themeStyle]);
  return (
    <>
      <div style={themeStyle}>
        <h4 style={{ marginRight: "10px" }}> Enter your number :</h4>
        <input
          type="text"
          value ={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />{" "}
        <br />
        <button onClick={() => setDark(!dark)}>Click</button>
        <h4 style={{ marginLeft: "10px" }}>output is : {Double}</h4>
      </div>
      
    </>
  );
}
