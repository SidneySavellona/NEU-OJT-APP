import React from "react";


const LoginButton: React.FC = () => {
    return(
        <button>
            <img src="./google_logo.png" alt="Google Logo" className="google-icon" />
            Sign in with Google
        </button>
    )
};

export default LoginButton;