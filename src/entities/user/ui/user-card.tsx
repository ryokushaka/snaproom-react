import React from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.avatar ? (
          <img src={user.avatar} alt={`${user.name}'s avatar`} />
        ) : (
          <div className="avatar-placeholder">
            {user.name?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};