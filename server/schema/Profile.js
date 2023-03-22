import { gql } from "apollo-server-express";

// Define the Profile type and its fields
const ProfileSchema = gql`
  
  type Profile {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
    dateOfBirth: String
    email: String!
    posts: String!
    profileImageUrl: String!
  }

  # Define the available query
  extend type Query {
    getProfiles: [User]
    getProfile(userId: ID!): Profile!
  }

  # Define the available mutations
  extend type Mutation {
    followUser(id: ID!): Profile!
    unfollowUser(id: ID!): Profile!
    uploadProfileImage(id: ID!, file: Upload!): Profile!
  }
`;

export default ProfileSchema;
