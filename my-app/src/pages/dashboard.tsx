import React from 'react';
import Header from "../components/Header";
import MainOptions from "../components/MainOptions";
import "../styles/Dashboard.css";


const Dashboard: React.FC = () => {
  return ( 
    <div className="body">
      <div className = "app-container">
        <Header />
        <MainOptions />
      </div>
    </div>
  );
}

export default Dashboard;
