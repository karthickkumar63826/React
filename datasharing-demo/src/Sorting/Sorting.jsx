import { useEffect, useState } from "react";

export default function Sorting() {
  let userObject = [
    { id: 1, name: "Jhon", age: 20 },
    { id: 2, name: "Karthick", age: 22 },
    { id: 3, name: "Roshan", age: 99 },
    { id: 4, name: "Gocool", age: 10 },
    { id: 5, name: "Shyam", age: 50 },
    { id: 6, name: "Sunil", age: 40 },
    { id: 7, name: "Kumar", age: 52 },
    { id: 8, name: "Jamuna", age: 44 },
    { id: 9, name: "Saranya", age: 19 },
    { id: 10, name: "Google", age: 26 },
  ];

  let [users, setUsers] = useState(userObject);

  let [sortBy, setSortBy] = useState("");

  const handleChange = () => {
    if (sortBy === "age") {
      const sorted = users.sort((u1, u2) => u1.age - u2.age);
      setUsers([...sorted]);
    } else if (sortBy === "name") {
      const sorted = users.sort((u1, u2) => u1.name.localeCompare(u2.name));
      setUsers([...sorted]);
    } else if (sortBy === "id") {
      const sorted = users.sort((u1, u2) => u1.id - u2.id);
      setUsers([...sorted]);
    }
  };

  useEffect(() => {
    handleChange();
  }, [sortBy]);

  return (
    <>
      <ul>
        {users.map((u) => (
          <li>
            {u.id} - {u.name} - {u.age}
          </li>
        ))}
      </ul>
      {/* <button onClick={() => SortByAge()}>Sort By Age</button>
      <br />
      <button onClick={() => SortByName()}> Sort By Name</button>
      <br />
      <button onClick={() => SortById()}>Sort By Id</button>
      <br /> */}

      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Select category</option>
        <option value="age">Sort by Age</option>
        <option value="name">Sort by Name</option>
        <option value="id">Sort by Id</option>
      </select>
    </>
  );
}
