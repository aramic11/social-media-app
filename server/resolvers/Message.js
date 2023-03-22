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

        // Use this to pretty-print the user object to the console (terminal)
        // console.log('postMessage > user: ', JSON.stringify(user, null, 2));

        const newMessage = new Message ({
          user: user.id,
          username: user.username,
          content,
        });
      
        // Save the message to the database
        const message = await newMessage.save();
        return message;
      },
    },
  
  };

  export default messageResolvers;