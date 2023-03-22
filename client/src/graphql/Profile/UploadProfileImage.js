import gql from "graphql-tag";

const UPLOAD_PROFILE_IMAGE = gql`
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

export default UPLOAD_PROFILE_IMAGE;