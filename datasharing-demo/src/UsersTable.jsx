function UsersTable({ users, onSearch }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100px",
          width: "100%",
        }}
      >
        <h3 style={{ marginRight: "20px" }}>Search</h3>
        <input type="text" onChange={(e) => onSearch(e.target.value)}></input>
      </div>
      <div style={{ padding: "0 40px" }}>
        <table className="table table-bordered">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {users.map((u) => (
            <tr>
              <td>{u.id}</td>
              <td>{u.name.firstname}</td>
              <td>{u.name.lastname}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default UsersTable;
