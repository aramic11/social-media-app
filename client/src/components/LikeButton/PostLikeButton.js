import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { IconButton, CardActions, Tooltip } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LIKE_POST from "../../graphql/Post/LikePost";

const PostLikeButton = ({ user, post: { id, postLikes } }) => {
  // Declare a state variable to keep track of whether the post is liked
  const [isLiked, setIsLiked] = useState(false);

  // Update the state variable when the post likes or user changes
  useEffect(() => {
    setIsLiked(!!user && postLikes.some((like) => like.username === user.username));
  }, [user, postLikes]);

  // Declare a mutation to like the post
  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId: id },
  });

  // Handle the click event when the user clicks the like button
  const handleLike = () => {
    likePost();
    setIsLiked(!isLiked);
  };

  // Render the like button with a tooltip indicating whether the post is liked or not
  const likeButton = (
    <IconButton aria-label="like" onClick={user ? handleLike : undefined} disabled={!user}>
      <Tooltip title={isLiked ? "Unlike" : "Like"} placement="top">
        <FavoriteIcon color={isLiked ? "secondary" : "disabled"} />
      </Tooltip>
    </IconButton>
  );

  // Render the like button in a CardAction component
  return <CardActions>{likeButton}</CardActions>;
};

export default PostLikeButton;

