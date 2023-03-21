import Post from "../models/Post.js";
import { authUser } from "../utils/auth.js";

const postResolvers = {
  Query: {
    // Get all posts
    getPosts: async () => {
      try {
        return await Post.find()
          .populate("user", "email")
          .sort({ dateCreated: -1 }); // Add the populate() call
      } catch (err) {
        throw new Error(err.message);
      }
    },

    // Get a specific post by postId
    getPost: async (_, { postId }) => {
      try {
        return await Post.findById(postId).populate("user", "email"); // Add the populate() call
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Mutation: {
    // Create a new post (imageUrl is not a required input)
    createPost: async (_, { title, content, imageUrl }, context) => {
      // Verify that the user is authenticated
      const user = authUser(context);
<<<<<<< HEAD
=======
    
>>>>>>> 5ce571c0133feaa798e0d634cf3419e8ed3cd87f

      // Create a new post
      const newPost = new Post({
        user: user.id,
        username: user.username,
        title,
        content,
        imageUrl,
        dateCreated: new Date().toISOString(),
      });

      // Save the post to the database
      const post = await newPost.save();
      return post;
    },

    // Delete a post
    deletePost: async (_, { postId }, context) => {
      // Verify that the user is authenticated
      const user = authUser(context);

      try {
        // Find the post in the database
        const post = await Post.findById(postId);

        // Check that the user is the author of the post
        if (post.username === user.username) {
          // Delete the post
          await post.deleteOne({ _id: postId });
          return "Post has been deleted";
        } else {
          throw new Error("Access denied");
        }
      } catch (err) {
        throw new Error(err.message);
      }
    },

    // Update a post
    updatePost: async (_, { postId, content }, context) => {
      // Verify that the user is authenticated
      const user = authUser(context);

      try {
        // Find the post in the database
        const post = await Post.findById(postId);

        // Check that the user is the author of the post
        if (post.username === user.username) {
          // Update the post and return the updated post object
          return await Post.findByIdAndUpdate(
            postId,
            { content },
            { new: true }
          );
        } else {
          throw new Error("Access denied");
        }
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },

  // Count number of comments and postLikes based on stored data
  Post: {
    commentCount: (parent) => parent.comments.length,
    postLikeCount: (parent) => parent.postLikes.length,
  },
};

export default postResolvers;
