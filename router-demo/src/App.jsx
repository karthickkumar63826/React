import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutUs from "./Component/aboutUs";
import Home from "./Component/home";
import Services from "./Component/services";
import Login from "./Component/login";
import { useState } from "react";

function App() {
  let services = ["Service A", "Service B", "Service C"];
  let[user, setUser] = useState({});
  const handleLogin =(user) =>{
    console.log(user);
    setUser(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/aboutUs">AboutUS</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>
          <Link>Welcome { user.username}</Link>
          <Link>Logout</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route
            path="/services"
            element={<Services services={services}></Services>}
          ></Route>
          <Route path="/login" element={<Login handleLogin={handleLogin}></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
