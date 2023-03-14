import React from "react";
import { useMutation } from "@apollo/client";
import { Button } from "@material-ui/core";
import { CREATE_FOLLOW_MUTATION } from "../graphql/mutations";

const FollowButton = ({ userId }) => {
  const [createFollow, { loading }] = useMutation(CREATE_FOLLOW_MUTATION, {
    variables: { userId },
  });

  const handleClick = () => {
    createFollow().catch((error) => console.log(error));
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick} disabled={loading}>
      {loading ? "Following" : "Follow"}
    </Button>
  );
};

export default FollowButton;
