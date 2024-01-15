"use client";
import Link from "next/link";
import "./synchronizeBtn.css";
import { syncUsers } from "@/services/user.api";
import { useRouter } from "next/navigation";

export default function SyncronizeBtn() {
  const router = useRouter();

  const handleSync = async () => {
    await syncUsers();
    router.refresh();
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
