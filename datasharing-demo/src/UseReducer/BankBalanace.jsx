import { useReducer, useState } from "react";

export default function BankBalance() {
  let [inputValue, SetInputValue] = useState();
  let [showBalance, setShowBalance] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "Widthdraw":
        return { ...state, balance: state.balance - action.payLoad };
      case "Deposit":
        return { ...state, balance: state.balance + action.payLoad };
      case "ViewBalance":
        return { balance: state.balance };
      default:
        return { balance: state.balance };
    }
  };

  let initialAccount = {
    name: "Karthick",
    accountNo: 12345678,
    balance: 10000,
  };
  let [state, dispatch] = useReducer(reducer, initialAccount);

  return (
    <>
      Enter Bank balance amount
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => SetInputValue(e.target.value)}
      />
      <br />
      {showBalance ? <h2>Balance : {state.balance}</h2> : " "}
      <br />
      <button
        onClick={() =>
          dispatch({ type: "Widthdraw", payLoad: Number(inputValue) })
        }
      >
        Widthdraw Amount
      </button>
      <button
        onClick={() =>
          dispatch({ type: "Deposit", payLoad: Number(inputValue) })
        }
      >
        Deposite Amount
      </button>
      <button
        onClick={() => {
          dispatch({ type: "ViewBalance" });
          setTimeout(setShowBalance(true), 2000);
        }}
      >
        View Balance
      </button>
    </>
  );
}
