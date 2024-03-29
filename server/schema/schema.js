import { gql } from "apollo-server-express";

// Import other schema files
import CommentSchema from "./Comment.js";
import FollowSchema from "./Follow.js";
import LikeSchema from "./Like.js";
import PostSchema from "./Post.js";
import UserSchema from "./User.js";
import MessageSchema from "./Message.js";


import ProfileSchema from "./Profile.js";

// Define the root Query and Mutation types, which are required by Apollo Server
const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${CommentSchema}
  ${FollowSchema}
  ${LikeSchema}
  ${PostSchema}
  ${UserSchema} 
  ${MessageSchema}
  ${ProfileSchema}
`;

export default typeDefs;
