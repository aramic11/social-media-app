import commentResolvers from "./Comment.js";
import followResolvers from "./Follow.js";
import likeResolvers from "./Like.js";
import messageResolvers from "./Message.js";
import postResolvers from "./Post.js";
import userResolvers from "./User.js";


const Resolvers = {
  Query: {
    ...postResolvers.Query,
    ...userResolvers.Query,
    ...messageResolvers.Query,
  
  },
  Mutation: {
    ...commentResolvers.Mutation,
    ...followResolvers.Mutation,
    ...likeResolvers.Mutation,
    ...postResolvers.Mutation,
    ...userResolvers.Mutation,
    ...messageResolvers.Mutation,
  },
  Comment: {
    ...commentResolvers.Comment,
  },
  Post: {
    ...postResolvers.Post,
  },
  User: {
    ...userResolvers.User,
  },
  Message: {
    ...messageResolvers.Message,
  },
};

export default Resolvers;
