import "./userForm.css";
import { postUser } from "@/services/user.api";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createUser(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const address = formData.get("address") as string;

  await postUser({ name, username, email, address });

  redirect("/");
}

export default function UserForm() {
  return (
    <div className="UserForm">
      <div className="form-container">
        <div className="form-header">
          <h2>Create user</h2>
          <Link href="/">
            <p>X</p>
          </Link>
        </div>
        <form action={createUser}>
          <label htmlFor="name">Name</label>
          <input required type="text" placeholder="Name" name="name" />
          <label htmlFor="name">Username</label>
          <input required name="username" type="text" placeholder="Username" />
          <label htmlFor="name">Email</label>
          <input required name="email" type="text" placeholder="Email" />
          <label htmlFor="name">Address</label>
          <input required name="address" type="text" placeholder="Address" />
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
}
