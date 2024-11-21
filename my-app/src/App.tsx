import React from 'react';
import logo from './logo.svg';
import Dashboard from './pages/dashboard';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className = 'app'>
         <Dashboard></Dashboard>
    </div>
)
};

export default App;
