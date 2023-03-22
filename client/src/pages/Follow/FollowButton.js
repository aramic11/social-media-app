// // importing required modules
// import React, { useState } from "react";
// import { useMutation, useQuery } from "@apollo/client";
// //import { GET_USER,  } from '../../graphql/Profile/GetUser';
// //import { FOLLOW_USER } from "../../graphql/Profile/FollowUser";
// //import {UNFOLLOW_USER } from "../../graphql/Profile/UnfollowUser";

// // Defining the FollowButton component
// const FollowButton = ({ userId, followStatus, updateFollowStatus }) => {
//   // Using useState hook to initialize following status
//   const [following, setFollowing] = useState(followStatus);

//   // Handling follow button click
//   const [followUser] = useMutation(FOLLOW_USER, {
//     variables: { userId },
//     update: () => {
//       setFollowing(true);
//       updateFollowStatus(true);
//     },
//     onError: (error) => console.error(error),
//   });

//   // Using useMutation hook to execute Unfollow_user
//   const [unfollowUser] = useMutation(UNFOLLOW_USER, {
//     variables: { userId },
//     update: () => {
//       setFollowing(false);
//       updateFollowStatus(false);
//     },
//     onError: (error) => console.error(error),
//   });

//   // Using useQuery hook to get user data
//   const { data, loading, error } = useQuery(GET_USER, {
//     variables: { userId },
//     skip: !userId,
//   });

//   const handleFollow = () => followUser();
//   const handleUnfollow = () => unfollowUser();

//   // Displaying loading message while user data is being fetched
//   if (loading) return <p>Loading...</p>;
//   // Displaying error message if there's an error while fetching user data
//   if (error) return <p>Error: {error.message}</p>;

//   const user = data?.getUser;
//   // Rendering button element that toggles between follow and unfollow
//   return (
//     <button className="btn btn-primary" onClick={following ? handleUnfollow : handleFollow}>
//       {following ? "Unfollow" : "Follow"}
//     </button>
//   );
// };

// export default FollowButton;

