import styles from "./usersList.module.css";
// import { getUsers } from "@/services/user.api";
import { User } from "@/types/user";

function getUsers() {
  return fetch("http://localhost:3000/users").then((response) =>
    response.json()
  );
}

export default async function usersList() {
  const users = await getUsers();

  return (
    <div className={styles.usersList}>
      <h1>Users list</h1>
      <p>{JSON.stringify(users)}</p>
      {users &&
        users.map((user: User) => (
          <div key={user.email}>
            <p>{user.name}</p>
          </div>
        ))}
    </div>
  );
}
