export default function User({ user }) {
  return (
    <>
      <div className="container">
        <b>Username :{user.username}</b><br></br>
        <b>Phone :{user.phone}</b>
        <hr />
      </div>
    </>
  );
}
