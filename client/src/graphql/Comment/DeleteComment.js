import gql from "graphql-tag";

// GraphQL mutation to delete a comment
const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id        
      comments { 
        id
        username
      }
    }
  }
`;

export default DELETE_COMMENT;

