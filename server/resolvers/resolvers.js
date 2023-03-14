import commentResolvers from "./Comment.js";
import followResolvers from "./Follow.js";
import likeResolvers from "./Like.js";
import postResolvers from "./Post.js";
import userResolvers from "./User.js";
import messageResolver from "./Message.js";
import postMessage from "./Message.js";

const Resolvers = {
  Query: {
    ...postResolvers.Query,
    ...userResolvers.Query,
    ...messageResolver.Query,
  },
  Mutation: {
    ...commentResolvers.Mutation,
    ...followResolvers.Mutation,
    ...likeResolvers.Mutation,
    ...postResolvers.Mutation,
    ...userResolvers.Mutation,
    ...messageResolver.Mutation,
    ...postMessage.Mutation,
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
  Message:{
    ...messageResolver.Message
  }
};

export default Resolvers;
