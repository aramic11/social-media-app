import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { GET_USER, FOLLOW_USER, UNFOLLOW_USER, UPLOAD_PROFILE_IMAGE } from '../../client/src/pages/Profile/Profile';

const ProfileResolver = {
    Query: {
      getUser: async (_, { userId }, { dataSources }) => {
        const user = await dataSources.profileAPI.getUser(userId);
        return user;
      },
    },
    Mutation: {
      // follow a user
      followUser: async (_, { id }, { dataSources }) => {
        const profile = await dataSources.profileAPI.followUser(id);
        return profile;
      },
  
      // Unfollow a user
      unfollowUser: async (_, { id }, { dataSources }) => {
        const profile = await dataSources.profileAPI.unfollowUser(id);
        return profile;
      },
  
      // Upload Profile Picture
      uploadProfileImage: async (_, { id, file }, { dataSources }) => {
        const profile = await dataSources.profileAPI.uploadProfileImage(id, file);
        return profile;
      },
    },
  
    Profile: {
      posts: async (parent, _, { dataSources }) => {
        const posts = await dataSources.postAPI.getPostsByUserId(parent.id);
        return posts;
      },
    },
  };
  
  module.exports = ProfileResolver;
  
  