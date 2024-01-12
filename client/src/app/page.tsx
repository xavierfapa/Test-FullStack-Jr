import styles from "./page.module.css";
import UsersList from "@/components/UsersList/UsersList";
import SynchronizeBtn from "@/components/SynchronizeBtn/SynchronizeBtn";

export default function Home() {
  return (
    <main className={styles.main}>
      <SynchronizeBtn />
      <UsersList />
    </main>
  );
}
