import { gql } from "apollo-server-express";

// Define the Profile type and its fields
const ProfileSchema = gql`
  scalar Upload
  
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
    getUsers: [User]
    getUser(userId: ID!): Profile!
  }

  # Define the available mutations
  extend type Mutation {
    followUser(id: ID!): Profile!
    unfollowUser(id: ID!): Profile!
    uploadProfileImage(id: ID!, file: Upload!): Profile!
  }
`;

import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      firstName
      lastName
      dateOfBirth
      email
      posts {
        id
        title
        content
      }
      profileImageUrl
    }
  }
`;

export const FOLLOW_USER = gql`
  mutation FollowUser($id: ID!) {
    followUser(id: $id) {
      id
      username
      firstName
      lastName
      dateOfBirth
      email
      posts {
        id
        title
        content
      }
      profileImageUrl
    }
  }
`;

export const UNFOLLOW_USER = gql`
  mutation UnfollowUser($id: ID!) {
    unfollowUser(id: $id) {
      id
      username
      firstName
      lastName
      dateOfBirth
      email
      posts {
        id
        title
        content
      }
      profileImageUrl
    }
  }
`;

export const UPLOAD_PROFILE_IMAGE = gql`
  mutation UploadProfileImage($id: ID!, $file: Upload!) {
    uploadProfileImage(id: $id, file: $file) {
      id
      username
      firstName
      lastName
      dateOfBirth
      email
      posts
      profileImageUrl
    }
  }
`;

type Query {
  getUser(id: ID!): Profile!
}

type Mutation {
  followUser(id: ID!): Profile!
  unfollowUser(id: ID!): Profile!
  uploadProfileImage(id: ID!, file: Upload!): Profile!
}

type Profile {
  id: ID!
  username: String!
  firstName: String!
  lastName: String!
  dateOfBirth: String
  email: String!
  posts: [Post]!
  profileImageUrl: String!
}

export default ProfileSchema;
