import React from "react";
import Home from "./Home";
import "../styles/Dashboard.css"
import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            <Navigate to='/login' />
            await signOut(auth);
        } catch(error: any) {
            console.log(error.message);
        }
    }
    
    return (
           <div className = 'header'>
                <button className="home-button" onClick={() => {navigate('/dashboard')}}>
                    <img src="neu_logo.png" alt="Home" />
                </button>

                <h1 className = 'name'>NEU OJT APP</h1>
                
                <button onClick={handleSignOut} className="logout-button">
                    Logout
                </button>
           </div>
    )
}

export default Header;
