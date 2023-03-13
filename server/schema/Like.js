import { gql } from "apollo-server-express";

// Define the schema for post and comment likes
const LikeSchema = gql`
  type PostLike {
    id: ID!
    username: String!
    dateCreated: String!
  }

  type CommentLike {
    id: ID!
    username: String!
    dateCreated: String!
  }

  # Define mutations for liking a post or comment
  extend type Mutation {
    likePost(postId: ID!): Post!
    likeComment(postId: ID!, commentId: ID!): Post!
  }
`;

export default LikeSchema;

