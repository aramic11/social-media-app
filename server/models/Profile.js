import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  posts: { type: String, required: true},
  profileImageUrl: { type: String, required: true},
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

//Creating Profile model from schema
const Profile = mongoose.model("Profile", profileSchema);

export default Profile;