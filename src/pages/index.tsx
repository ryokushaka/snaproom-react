import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home';
import { LoginPage } from './login';

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};