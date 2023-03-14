import { gql } from "@apollo/client";

export const CREATE_FOLLOW_MUTATION = gql`
  mutation CreateFollow($userId: ID!) {
    createFollow(userId: $userId) {
      id
      username
      followers {
        id
        username
      }
    }
  }
`;
