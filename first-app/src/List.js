const Heading = () => {
  return (
    <>
      <h1>This is a Heading</h1>
    </>
  );
};

const List = () => {
  let names = ["Vijay", "Ajith", "Suriya", "Rajini", "Kamal"];

  return (
    <>
      <ul>
        {names.map((name) => (
          <li style={{ listStyle: "none" }}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export { List, Heading };
