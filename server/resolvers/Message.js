//import { authUser } from "../utils/auth.js";
const messages = [];
const messageResolver = {
    Query: {
        messages: () => messages,
      },
      Mutation:{
        postmessage: (parent, {username,content}) => {
            //const user = authUser(context)
            const id= messages.length;
           
            messages.push({
                //user: user.id,
               // username: user.username,
               username,
                id,
                content
            });
            return id;

        }
    }
      
}
export default messageResolver;