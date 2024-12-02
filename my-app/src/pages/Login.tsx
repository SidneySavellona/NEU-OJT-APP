import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../services/firebase";
import LoginButton from "../components/LoginButton";
import "../styles/Login.css";

const Login: React.FC = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

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
