import gql from "graphql-tag";

const GET_USER = gql`
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

export default GET_USER;