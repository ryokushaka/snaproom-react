import React from 'react';
import { useAuth } from '../../features/auth';
import { UserCard } from '../../entities/user';
import { Button } from '../../shared/ui';

export const AuthWidget: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="auth-widget">
        <p>Please log in to continue</p>
        <Button to="/login">Login</Button>
      </div>
    );
  }

  return (
    <div className="auth-widget">
      <UserCard user={user} />
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};