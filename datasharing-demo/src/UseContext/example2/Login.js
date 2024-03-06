import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { isLoggedIn, login } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={login}>Login</button>
      ) : (
        <p>You are already logged in </p>
      )}
    </div>
  );
};


export default Login;