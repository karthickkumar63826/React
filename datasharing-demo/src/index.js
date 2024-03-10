import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./users";
import FetchProduct from "./UseEffects/fetchProduct";
import UseRefDemo from "./useRef/UseRefDemo";
import UseRefDemo2 from "./useRef/UseRefDemo2";
import UseRefDemo3 from "./useRef/UseRefDemo3";
import UseRefDemo4 from "./useRef/UseRefDemo4";
import TourAPI from "./UseEffects/TourAPI";
import BookForm from "./FormDemo/BookForm";
import WrapperComponent from "./WrapperComponent";
import CounterReducer from "./UseReducer/CounterReducer";
import BankBalance from "./UseReducer/BankBalanace";
import Sorting from "./Sorting/Sorting";
import Category from "./Category/Category";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Users /> */}
    {/* <FetchProduct /> */}
    {/* <UseRefDemo/> */}
    {/* <UseRefDemo2 /> */}
    {/* <UseRefDemo4 /> */}
    {/* <TourAPI/> */}
    {/* <BookForm /> */}
    {/* <WrapperComponent title="Section1">
      <p>This is message from section 1</p>
      <button>Click me</button>
    </WrapperComponent>

    <WrapperComponent title="Section2">
      <p>This is message from section 2</p>
      <a href="#">Click me </a>
    </WrapperComponent> */}
    {/* <CounterReducer/> */}
    {/* <BankBalance/> */}
    {/* <Sorting /> */}
    {/* <Category /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
