"use client";
import styles from "./page.module.css";
import UsersList from "@/components/UsersList/UsersList";
import SyncronizeBtn from "@/components/SyncronizeBtn/SyncronizeBtn";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1>Hey hey</h1> */}
      <SyncronizeBtn />
      <UsersList />
    </main>
  );
}
