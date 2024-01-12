"use client";
import Link from "next/link";
import "./synchronizeBtn.css";
import { syncUsers } from "@/services/user.api";

export default function SyncronizeBtn() {
  const handleSync = async () => {
    await syncUsers();
    window.location.reload();
  };

  return (
    <div className="syncronize-container">
      <button onClick={handleSync} className="button">
        Synchronize List
      </button>
      <Link href={"/userform"}>
        <button className="button">Create user</button>
      </Link>
    </div>
  );
}
