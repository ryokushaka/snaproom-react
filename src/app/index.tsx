import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '../pages';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routing />
      </div>
    </BrowserRouter>
  );
};