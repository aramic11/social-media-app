import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { IconButton, CardActions } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LIKE_COMMENT from "../../graphql/Comment/LikeComment";

const CommentLikeButton = ({ user, postId, commentId, comment }) => {
  const [liked, setLiked] = useState(false);

  // Check if the user has already liked the comment
  useEffect(() => {
    // If the user exists and there is a comment like whose username matches the user's username, set liked to true
    const hasLiked = user && comment.commentLikes.some(like => like.username === user.username);
    setLiked(hasLiked);
  }, [user, comment.commentLikes]);

  // Define the likeComment mutation
  const [likeComment] = useMutation(LIKE_COMMENT, {
    variables: { postId, commentId },
  });

  // Handle the like button click event and update the state accordingly
  const handleLike = () => {
    likeComment();
    setLiked(!liked);
  };

  // Render the like button in the appropriate color based on whether the user has liked the comment
  const likeButton = user ? (
    <IconButton aria-label="like" color={liked ? "secondary" : "default"} onClick={handleLike}>
      <FavoriteIcon />
    </IconButton>
  ) : (
    <IconButton aria-label="like" href="/login">
      <FavoriteIcon color="disabled" />
    </IconButton>
  );

  // Render the like button inside a CardActions component
  return (
    <CardActions>
      {likeButton}
    </CardActions>
  );
};

export default CommentLikeButton;


