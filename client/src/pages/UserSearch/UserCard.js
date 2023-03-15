import React from "react";

const UserCard = ({ user, userId }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      {userId && <p>User ID: {userId}</p>}
    </div>
  );
};

export default UserCard;
