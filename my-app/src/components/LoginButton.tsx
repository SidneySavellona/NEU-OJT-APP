import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const LoginButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-primary">
      <img src="./google_logo.png" alt="Google Logo" className="google-icon me-2" />
      Sign in with Google
    </button>
  );
};

export default LoginButton;
