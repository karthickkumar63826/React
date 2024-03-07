import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Service from "./Service";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import { useState } from "react";

export default function App2() {
  let [user, setUser] = useState(null);

  const handleLogin = (user) => {
    console.log(user);
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              {user ? (
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
          <Routes>
            <Route
              path="/home"
              element={
                user ? <Home name={user.username} user ={user}></Home> : <Home></Home>
              }
            ></Route>
            <Route path="/services" element={<Service></Service>}></Route>
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin}></Login>}
            ></Route>
            <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route
              path="/logout"
              element={<Logout Logoutfunction={handleLogout}></Logout>}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
