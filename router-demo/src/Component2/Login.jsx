import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ handleLogin }) {
  let [loginUser, setLoginUser] = useState({ username: "", password: "" });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginUser);
    navigate("/home");
  };

  return (
    <>
      <div className="loginPage">
        <h1>Login Page</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">Enter UserName</label>
          <input
            type="text"
            id="username"
            value={loginUser.username}
            name="username"
            onChange={(e) => handleChange(e)}
          ></input>
          <br></br>
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginUser.password}
            onChange={(e) => handleChange(e)}
          ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
