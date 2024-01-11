import "./usersList.css";
// import { getUsers } from "@/services/user.api";
import { User } from "@/types/user";

function getUsers() {
  // return fetch(" https://jsonplaceholder.typicode.com/users").then((response) =>
  //   response.json()
  // );
  return fetch("http://localhost:3000/users").then((response) =>
    response.json()
  );
}

export default async function usersList() {
  const users = await getUsers();

  return (
    <div className="usersListContainer">
      <h1 className="title">Users list</h1>
      {/* <p>{JSON.stringify(users)}</p> */}
      <table className="usersTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user: User) => (
              <tr key={user.email}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
