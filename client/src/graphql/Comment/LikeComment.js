import { gql } from "graphql-tag";

// GraphQL mutation to like a comment
const LIKE_COMMENT_MUTATION = gql`
  mutation likeComment($postId: ID!, $commentId: ID!) {
    likeComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        commentLikes {
          id
          username
        }
        commentLikeCount
      }
    }
  }
`;

export default LIKE_COMMENT_MUTATION;

