const User = require("../models/userModel");

async function createUser(req, res) {
  try {
    const userData = req.body;

    const newUser = await User.create(userData);
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(404).json({ message: "No users found" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function syncUsers(req, res) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const externalUsers = await response.json();

    for (externalUser of externalUsers) {
      const existingUser = await User.findOne({ external_id: externalUser.id });

      if (existingUser) {
        await User.updateOne({ external_id: externalUser.id });
      } else {
        await User.create({
          name: externalUser.name,
          username: externalUser.username,
          email: externalUser.email,
          external_id: externalUser.id,
          address: externalUser.address.street,
        });
      }
    }

    res.status(200).json({ message: "Synchronization successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { createUser, getUsers, syncUsers };
