import React from 'react';
import Header from "../components/Header";
import MainOptions from "../components/MainOptions";
import "../styles/App.css"



const Dashboard: React.FC = () => {
  return ( 
    <div className = "app-container">
      <Header />
      <MainOptions />
    </div>
  );
}

export default Dashboard;
