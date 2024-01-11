"use client";
import "./userForm.css";
import { useState } from "react";
import { User } from "@/types/user";
import { postUser } from "@/services/user.api";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialUserState: User = {
  name: "",
  username: "",
  email: "",
  address: "",
};

export default function UserForm() {
  const [form, setForm] = useState<User>(() => initialUserState);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    postUser(form).then((data) => {
      console.log(data);
      router.refresh();
      router.push("/");
    });
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="UserForm">
      <div className="form-container">
        <div className="form-header">
          <h2>Create user</h2>
          <Link href="/">
            <p>X</p>
          </Link>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChanges}
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChanges}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChanges}
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChanges}
          />
          <button className="sync-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
