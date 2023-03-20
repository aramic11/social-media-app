import Message from "../models/Message.js";
import { authUser } from "../utils/auth.js";
const messages = [];
const messageResolvers = {
    Query: {
      messages: async () => {
        try {
          return await Message.find().sort({ dateCreated: -1 });
        } catch (err) {
          throw new Error(err.message);
        }
      },
  
    },
    Mutation: {
      
      postMessage: async ( _,{content }, context) => {
        const user = authUser(context);
        const newMessage = new Message ({
          user: user.id,
          username: user.username,
          content,
        

        });
        const message = await newMessage.save();
        return message;
      },
    },
    
  };

  export default messageResolvers;