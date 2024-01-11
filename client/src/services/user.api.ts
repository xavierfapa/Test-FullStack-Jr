const BASE_URL = "http://localhost:3000";
import { User } from "@/types/user";

export async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

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
