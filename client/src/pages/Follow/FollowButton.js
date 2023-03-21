//importing required modules
import React, { useState } from "react";
import axios from "axios";

//Defining the FollowButton component
const FollowButton = ({ userId, followStatus, updateFollowStatus }) => {
    //Using useState hook to initialize following status
  const [following, setFollowing] = useState(followStatus);

  //Handling follw button click
  const handleFollow = async () => {
    try {
      const response = await axios.post(`/api/users/${userId}/follow`);
      if (response.status === 200) {
        setFollowing(true);
        updateFollowStatus(true); //Updating the follow status in the parent component
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Handling unfollow button click
  const handleUnfollow = async () => {
    try {
      const response = await axios.delete(`/api/users/${userId}/follow`);
      if (response.status === 200) {
        setFollowing(false);
        updateFollowStatus(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Returning butoon element that toggles between follow and unfollow
  return (
    <button className="btn btn-primary" onClick={following ? handleUnfollow : handleFollow}>
      {following ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
