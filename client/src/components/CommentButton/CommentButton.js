import React, { useEffect, useState } from "react";
import { CardActions } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

const CommentButton = ({ user, post: { comments } }) => {
  const [commented, setCommented] = useState(false);

  // Check if the user has already commented on the post
  useEffect(() => {
    // If the user exists and there is a comment whose username matches the user's username, set commented to true
    const hasCommented = user && comments.some(comment => comment.username === user.username);
    setCommented(hasCommented);
  }, [user, comments]);

  // Render the comment icon in the appropriate color based on whether the user has commented
  const icon = commented
    ? <CommentIcon color="primary" />
    : <CommentIcon color="disabled" />;

  // Render the comment icon inside a CardActions component
  return (
    <CardActions>
      {icon}
    </CardActions>
  );
};

export default CommentButton;

