import React from 'react';
import '../styles/Login.css';
import LoginButton from '../components/LoginButton';

const Login: React.FC = () => {
  return (
    <div className='body'>
      <div className="login-container">
        <h1>NEU OJT APP</h1>
        <img src="./neu-logo.png" alt="NEU Logo" className="neu-logo" />
        <div className="container-fluid">
          <LoginButton />
        </div>
      </div>
    </div>
  )
};

export default Login;