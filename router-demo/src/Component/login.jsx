import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ handleLogin }) {
  let [loginUser, SetLoginUser] = useState({ username: "", password: "" });
  let navigate = useNavigate();
  const handleChanges = (e) => {
    const { name, value } = e.target;
    SetLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginUser);
    navigate("/home");
  };

  return (
    <>
      <div className="LoginPage">
        <h1>Login Page</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label>Enter UserName</label>
          <input
            type="text"
            value={loginUser.username}
            name="username"
            onChange={(e) => handleChanges(e)}
          />
          <br></br>
          <label htmlFor="">Enter Password</label>
          <input
            type="password"
            value={loginUser.password}
            name="password"
            onChange={(e) => handleChanges(e)}
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
