import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub, mul, div } from "./ArithmeticSlice";

const ArithmeticComponent = () => {
  let [number1, setNumber1] = useState();
  let [number2, setNumber2] = useState();
  let [method, setMethod] = useState("");
  let data = useSelector((state) => state.arithmetic);
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (method) {
      case "add":
        dispatch(add({ number1, number2 }));
        break;
      case "sub":
        dispatch(sub({ number2, number1 }));
        break;
      case "mul":
        dispatch(mul({ number1, number2 }));
        break;
      case "div":
        dispatch(div({ number2, number1 }));
        break;
      default:
        alert("please select a method ");
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        Enter number 1 :{" "}
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
        <br />
        Enter number 2 :{" "}
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
        <br />
        <label htmlFor="addition">Addition</label>
        <input
          type="radio"
          id="addition"
          name="cal"
          value="add"
          onChange={(e) => setMethod(e.target.value)}
        />
        <br></br>
        <label htmlFor="subtraction">Subtraction</label>
        <input
          type="radio"
          id="subtraction"
          name="cal"
          value="sub"
          onChange={(e) => setMethod(e.target.value)}
        />
        <br />
        <label htmlFor="multiply">Multiplication</label>
        <input
          type="radio"
          id="multiply"
          name="cal"
          value="mul"
          onChange={(e) => setMethod(e.target.value)}
        ></input>
        <br />
        <label htmlFor="division"> Division</label>
        <input
          type="radio"
          id="division"
          name="cal"
          value="div"
          onChange={(e) => setMethod(e.target.value)}
        ></input>
        <br />
        <button type="submit" value="submit">
          Result
        </button>
      </form>
      Number 1 : {data.number1}
      <br /> Number 2 : {data.number2}
      <br /> result : <br />
      {data.result}
    </>
  );
};

export default ArithmeticComponent;
