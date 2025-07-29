import React from 'react';
import { AuthWidget } from '../../widgets/auth-widget';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Snaproom</h1>
      <AuthWidget />
    </div>
  );
};