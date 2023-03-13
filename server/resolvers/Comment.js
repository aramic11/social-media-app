import Post from "../models/Post.js";
import { authUser } from "../utils/auth.js";

const commentResolvers = {
  Mutation: {
    // Create a new comment
    createComment: async (_, { postId, content }, context) => {
      const user = authUser(context);
      const post = await Post.findById(postId);
      post.comments.unshift({
        username: user.username,
        content,
        dateCreated: new Date().toISOString(),
      });
      await post.save();
      return post;
    },

    // Delete a comment
    deleteComment: async (_, { postId, commentId }, context) => {
      const user = authUser(context);
      const post = await Post.findById(postId);
      const comment = post.comments.find(c => c.id === commentId);
      if (!comment) {
        throw new Error("Comment not found");
      }
      if (comment.username !== user.username) {
        throw new Error("Action not allowed");
      }
      post.comments = post.comments.filter(c => c.id !== commentId);
      await post.save();
      return post;
    },

    // Update a comment
    updateComment: async (_, { postId, commentId, content }, context) => {
      const user = authUser(context);
      const post = await Post.findById(postId);
      const comment = post.comments.find(c => c.id === commentId);
      if (!comment) {
        throw new Error("Comment not found");
      }
      if (comment.username !== user.username) {
        throw new Error("Action not allowed");
      }
      comment.content = content;
      await post.save();
      return post;
    },
  },

  // Count number of commentLike based on stored data
  Comment: {
    commentLikeCount: (parent) => (parent.commentLikes ? parent.commentLikes.length : 0),
  },
};

export default commentResolvers;
