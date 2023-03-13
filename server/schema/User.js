import { gql } from "apollo-server-express";

// Define User schema using GraphQL schema language
const UserSchema = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    followers: [Follow]
    following: [Follow]
    followingCount: Int!
    followerCount: Int!
    dateCreated: String!
    authToken: String!
  }
  # Define Query types to retrieve Users
  extend type Query {
    getUsers: [User]
    getUser(userId: ID!): User
  }

  # Define Mutation types to create and login Users
  extend type Mutation {
    createUser(username: String!, password: String!, email: String!): User!
    login(username: String!, password: String!): User!
  }
`;

export default UserSchema;
