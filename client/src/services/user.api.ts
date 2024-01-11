const BASE_URL = "http://localhost:3000/";

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
