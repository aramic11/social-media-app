import { gql } from "apollo-server-express";

// Import other schema files
import CommentSchema from "./Comment.js";
import FollowSchema from "./Follow.js";
import LikeSchema from "./Like.js";
import PostSchema from "./Post.js";
import UserSchema from "./User.js";
import ProfileSchema from "./Profile";

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
  ${ProfileSchema}
`;

export default typeDefs;
