import { useNavigate } from "react-router-dom";

export default function Logout({ Logoutfunction }) {
  let navigate = useNavigate();

  const handleLogout = () => {
    Logoutfunction();
    navigate("/home");
  };
  return (
    <>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
