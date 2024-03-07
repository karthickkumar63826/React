export default function Home({ name, user }) {
  return (
    <>
      <h1>Home</h1>
      {user ? <h3>Welcome {name} </h3> : ""}
    </>
  );
}
