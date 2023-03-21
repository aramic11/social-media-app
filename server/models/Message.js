import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

} , {timestamps:true});

const Message = mongoose.model("Message", messageSchema);

export default Message;