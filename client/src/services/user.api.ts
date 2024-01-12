const BASE_URL = "http://localhost:4000";
import { User } from "@/types/user";

export async function postUser(user: User) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Error in the server request");
    }
  } catch (error) {
    console.error("Error in the server request", error);
  }
}

export async function syncUsers() {
  try {
    const response = await fetch(`${BASE_URL}/sync`, {
      method: "POST",
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Error in the server request");
    }
  } catch (error) {
    console.error("Error in the server request", error);
  }
}
