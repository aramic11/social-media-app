import gql from "graphql-tag";

const UNFOLLOW_USER = gql`
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

export default UNFOLLOW_USER;