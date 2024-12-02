import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <button className="home-button" onClick={() => navigate('/')}>
            <img src="neu_logo.png" alt="Home" />
        </button>
    );
};

export default Home;
