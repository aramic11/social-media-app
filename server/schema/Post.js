import { gql } from "apollo-server-express";

// Define the Post type and its fields
const PostSchema = gql`
  type Post {
    id: ID!
    username: String!
    title: String
    content: String!
    imageUrl: String
    dateCreated: String!
    postLikes: [PostLike]!
    postLikeCount: Int!
    comments: [Comment]!
    commentCount: Int!
    user: User!
  }

  # Define the available queries for Post type
  extend type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  # Define the available mutations for Post type
  extend type Mutation {
    createPost(title: String!, content: String!, imageUrl: String): Post!
    deletePost(postId: ID!): String!
    updatePost(postId: ID!, content: String): Post!
  }
`;

export default PostSchema;
