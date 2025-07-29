import React from 'react';
import { LoginForm } from '../../features/auth';

export const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};