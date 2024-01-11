"use client";
import Link from "next/link";
import "./syncronizeBtn.css";
import { syncUsers } from "@/services/user.api";

export default function syncronizeBtn() {
  const handleSync = () => {
    syncUsers();
  };

  return (
    <div className="syncronize-container">
      <button onClick={handleSync} className="sync-button">
        Sycronze List
      </button>
      <Link href={"/userform"}>
        <button className="sync-button">Create user</button>
      </Link>
    </div>
  );
}
