import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`/api/users/${userId}`);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setErrorMessage('Error fetching user data');
      }
    };

    getUser();
  }, [userId]);

  const handleFollow = async () => {
    try {
      await axios.post(`/api/users/${userId}/follow`);
      setFollowing(true);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error following user');
    }
  };

  const handleUnfollow = async () => {
    try {
      await axios.post(`/api/users/${userId}/unfollow`);
      setFollowing(false);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error unfollowing user');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('profileImage', selectedFile);
      await axios.post(`/api/users/${userId}/profile-image`, formData);
      // Refresh the user data
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error uploading profile picture');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <img src={user.profileImageUrl} alt={`${user.name}'s profile picture`} />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Profile Picture</button>
      {errorMessage && <p>{errorMessage}</p>}
      <p>{user.bio}</p>
      {following ? (
        <button onClick={handleUnfollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollow}>Follow</button>
      )}
    </div>
  );
};

export default Profile;
