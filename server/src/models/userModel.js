const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  external_id: String,
  address: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
