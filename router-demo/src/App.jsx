import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./Component/aboutUs";
import Home from "./Component/home";
import Services from "./Component/services";
import Login from "./Component/login";
import { useState } from "react";
import Products from "./Component/products";
import Logout from "./Component/logout";
import Product from "./Component/product";
import Layout from "./Component/layout";

function App() {
  let services = ["Service A", "Service B", "Service C"];
  let [user, setUser] = useState(null);

  const handleLogin = (user) => {
    console.log(user);
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              listStyle: "none",
            }}
          >
            <li>
              {" "}
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">AboutUS</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link> welcome {user.username}</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route
              path="/home"
              element={
                user ? <Home name={user.username}></Home> : <Home></Home>
              }
            ></Route>
            <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route
              path="/services"
              element={<Services services={services}></Services>}
            ></Route>
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin}></Login>}
            ></Route>
            <Route
              path="/logout"
              element={<Logout handleLogout={handleLogout}></Logout>}
            ></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route
              path="/product/:productid"
              element={<Product></Product>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
