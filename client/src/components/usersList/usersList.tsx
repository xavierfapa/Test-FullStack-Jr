import { unstable_noStore } from "next/cache";
import "./usersList.css";
import { User } from "@/types/user";

async function getUsers() {
  unstable_noStore();

  return fetch("http://localhost:4000/users").then((response) =>
    response.json()
  );
}

export default async function UsersList() {
  const users = await getUsers();

  return (
    <div className="usersListContainer">
      <h1 className="title">Users list</h1>
      {users.length > 0 ? (
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
            {users.map((user: User) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
