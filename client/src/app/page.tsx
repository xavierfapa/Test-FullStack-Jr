import styles from "./page.module.css";
import SynchronizeBtn from "@/components/SynchronizeBtn/SynchronizeBtn";
import UsersList from "@/components/UsersList/UsersList";

export default function Home() {
  return (
    <main className={styles.main}>
      <SynchronizeBtn />
      <UsersList />
    </main>
  );
}
