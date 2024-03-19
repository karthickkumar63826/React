import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reducers/usersSlice";
import User from "./User";

export default function Users() {
  let data = useSelector((state) => state.userStore);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h1>USERS</h1>
      {data.isLoading ? "Loading" : " "}
      {data.users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
      {data.isError ? "Error" : ""}
    </>
  );
}
