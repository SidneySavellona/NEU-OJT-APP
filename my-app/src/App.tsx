import React from 'react';
import logo from './logo.svg';
import routes from './services/routes'
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
