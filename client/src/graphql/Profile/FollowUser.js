import gql from "graphql-tag";

const FOLLOW_USER = gql`
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

export default FOLLOW_USER;