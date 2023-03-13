import User from "../models/User.js";
import { authUser } from "../utils/auth.js";

const followResolvers = {
  Mutation: {
    // Create follower/following
    createFollow: async (_, { userId, followerID }, context) => {
      try {
        // Get authenticated user
        const authenticatedUser = authUser(context);
        // Find follower
        const follower = await User.findById(followerID);

        // Check that the authenticated user is the follower
        if (authenticatedUser.username !== follower.username) {
          throw new Error("Access denied");
        }

        // Find user to follow/unfollow
        const user = await User.findById(userId);
        const index = user.followers.findIndex(
          (follow) => follow.username === follower.username
        );

        // Follow the user if the user wasn't already followed.
        if (index === -1) {
          user.followers.push({
            username: follower.username,
          });

          // Add user to follower's following array
          follower.following.push({
            username: user.username,
          });
        }

        // Unfollow the user if the user was already followed.
        else {
          user.followers = user.followers.filter(
            (follow) => follow.username !== follower.username
          );

          // Remove user from follower's following array
          follower.following = follower.following.filter(
            (follow) => follow.username !== user.username
          );
        }

        // Save changes to user and follower documents
        await user.save();
        await follower.save();
        return user;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default followResolvers;

