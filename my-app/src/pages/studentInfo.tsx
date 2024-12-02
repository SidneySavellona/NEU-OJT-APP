import React from 'react';
import Header from "../components/Header";
import Forms from '../components/Forms';
import "../styles/StudentInfo.css";


const studentInfo: React.FC = () => {
  return ( 
    <div className="body">
        <p>Student info</p>
        <Header />
        <Forms />
    </div>
  );
}

export default studentInfo;