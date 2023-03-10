import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define user schema
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  followers: [
    {
      username: { type: String, required: true },
    },
  ],
  following: [
    {
      username: { type: String, required: true },
    },
  ],
  dateCreated: { type: String, required: true },
});

// Create User model from schema
const User = mongoose.model("User", userSchema);

export default User;

