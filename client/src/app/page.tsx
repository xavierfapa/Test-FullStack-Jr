import styles from "./page.module.css";
import UsersList from "@/components/usersList/usersList";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1>Hey hey</h1> */}
      <UsersList />
    </main>
  );
}
