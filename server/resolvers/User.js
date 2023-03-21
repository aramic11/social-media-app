import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/auth.js";

// Define resolvers for User type
const userResolvers = {
  Query: {
    // Get all users
    getUsers: async () => {
      try {
        return await User.find().sort({ dateCreated: -1 });
      } catch (err) {
        throw err;
      }
    },

    // Get user by ID
    getUser: async (_, { userId }) => {
      try {
        return await User.findById(userId);
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    // Sign up user
    createUser: async (_, { username, password, email }) => {
      try {
        // Check if user with the same username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          throw new Error("Username already exists.");
        }

        // Hash the user's password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user object with hashed password
        const user = new User({
          username,
          password: hashedPassword,
          email,
          dateCreated: new Date().toISOString(),
        });

        // Save the user to the database
        const result = await user.save();

        // Generate an authentication token for the user
        const authToken = generateToken(result);

        // Return the user object along with the auth token
        return {
          ...result._doc,
          id: result._id,
          authToken,
        };
      } catch (err) {
        throw err;
      }
    },

    // Sign in user
    login: async (_, { username, password }) => {
      // Find the user with the provided username
      const user = await User.findOne({ username });

      // If user not found, throw an error
      if (!user) {
        throw new Error("User not found!");
      }

      // Check if the provided password matches the hashed password
      const checkPassword = await bcrypt.compare(password, user.password);

      // If passwords don't match, throw an error
      if (!checkPassword) {
        throw new Error("Incorrect login information!");
      }

      // Generate an authentication token for the user
      const authToken = generateToken(user);

      // Return the user object along with the auth token
      return {
        ...user._doc,
        id: user._id,
        authToken,
      };
    },
  },

  // Define resolvers for fields in User type
  // FOLLOWERS
  User: {
    // Return the number of followers for a user
    followerCount: (parent) => parent.followers.length,

    // Return the number of users a user is following
    followingCount: (parent) => parent.following.length,
  },
  
};

export default userResolvers;

