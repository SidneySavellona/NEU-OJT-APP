import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Dashboard.css"

const MainOptions: React.FC = () => {
  const navigate = useNavigate(); 

  const handleUpdateCompanyClick = () => {
    navigate("/update-company"); 
  };
  const handleStudentInfoClick = () => {
    navigate("/Student-Info"); 
  };
  const handleUploadRequirementClick = () => {
    navigate("/upload-requirements"); 
  }

  return (
    <section className="options">
      <button className="option-button" onClick={handleStudentInfoClick}>
        <img src="neu_logo.png" alt="Enter Student Input" />
        Enter Student Input
      </button>
      <button className="option-button" onClick={handleUploadRequirementClick}>
        <img src="neu_logo.png" alt="Upload Requirements" />
        Upload Requirements
      </button>
      <button className="option-button">
        <img src="neu_logo.png" alt="Generate Endorsement Letter" />
        Generate Endorsement Letter
      </button>
      <button className="option-button" onClick={handleUpdateCompanyClick}>
        <img src="neu_logo.png" alt="Update Company" />
        Update Company
      </button>
    </section>
  );
};

export default MainOptions;
