import React, { useState, useEffect } from "react";
import { institutionalGoogleEmailLogin } from "../services/GoogleAuthentication";
import { Navigate, useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const LoginButton: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [error, setError] = useState<String | null>(null);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {

        try{
            const resultUser = await institutionalGoogleEmailLogin();

            if('error' in resultUser){
                setError("You need to log-in using Institutional Email.");
                setUser(null);
            } else {
                const user = resultUser;
                const db = getFirestore();
                const userRef = doc(db, 'user', user.uid);
                const userDoc = await getDoc(userRef);

                if(userDoc.exists()){
                    setUser(resultUser);
                    setError(null);

                    navigate('/dashboard');

                } else {
                    setUser(null);
                    setError("You need to log-in using Institutional Email.");
                }
            }

        } catch(error: any){
            console.error("Error logging in with Google", error);
            setError(error.message);
            setUser(null);
        };
    };

    return(
        <div>
            <button onClick={ handleGoogleLogin }>
                <img src="./google_logo.png" alt="Google Logo" className="google-icon" />
                Sign in with Google
            </button>
            
            {error && (
            <p style={{ color: 'red' }}>
                {error}
            </p>
            )}
        </div>
    )
};

export default LoginButton;
