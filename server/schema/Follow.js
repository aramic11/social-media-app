import { gql } from "apollo-server-express";

//Define the schema for following the user
const FollowSchema = gql`
  type Follow {
    id: ID!
    username: String!
  }

  # Define mutations for following the user
  extend type Mutation {
    createFollow(userId: ID!
    followerID: ID!): User!
  }
`;

export default FollowSchema;
