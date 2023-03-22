import commentResolvers from "./Comment.js";
import followResolvers from "./Follow.js";
import likeResolvers from "./Like.js";
import messageResolvers from "./Message.js";
import postResolvers from "./Post.js";
import userResolvers from "./User.js";
import profileResolvers from "./Profile.js";


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
    ...profileResolvers.Mutation,
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
  Profile: {
    ...profileResolvers.Profile
  }
};

export default Resolvers;
