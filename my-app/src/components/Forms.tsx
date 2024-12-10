import React, { useState } from "react";
import "../styles/studentInfo.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


const Forms: React.FC = () => {
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState<boolean>(false); 
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
 
 

  const handleEditToggle = () => {
    setIsEditable((prev: boolean) => !prev); 
  };

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    setIsPopupVisible(true);
    setIsEditable(false); 
    setTimeout(() => setIsPopupVisible(false), 3000);
  
  };
 

  return (
    <main className="form-container">
      <form method='POST' onSubmit={handleSave}>
        <Header />
        <br />
        <br />
        <div className="container">
          <div>
            <h1>Student Info</h1>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" disabled={!isEditable} />
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" disabled={!isEditable} />
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" id="middleName" name="middleName" disabled={!isEditable} />
          </div>

          <div className="form-group">
            <label htmlFor="block">Block</label>
            <input type="text" id="block" name="block" disabled={!isEditable} />
            <label htmlFor="adviser">Adviser</label>
            <input type="text" id="adviser" name="adviser" disabled={!isEditable} />
            <label htmlFor="semester">Semester</label>
            <input type="text" id="semester" name="semester" disabled={!isEditable} />
          </div>

          <div className="form-group">
            <label htmlFor="ay">School Year</label>
            <select name="schoolYear" className="schoolYear" disabled={!isEditable}>
              <option value="2425">2024-2025</option>
              <option value="2526">2025-2026</option>
              <option value="2627">2026-2027</option>
            </select>
            <label htmlFor="studentID">Student ID</label>
            <input type="text" id="studentID" name="studentID" disabled={!isEditable} />
            <label htmlFor="course">Course</label>
            <select name="course" className="course" disabled={!isEditable}>
              <option value="bsaa">Bachelor of Science in Accountancy (BS in Accountancy)</option>
              <option value="bsai">Bachelor of Science in Accounting Information Systems</option>
              <option value="bsat">Bachelor of Science in Accounting Technology</option>
              <option value="bsmt">Bachelor of Science in Medical Technology</option>
              <option value="bsrt">Bachelor of Science in Respiratory Therapy</option>
              <option value="bscs">Bachelor of Science in Computer Science</option>
              <option value="bsit">Bachelor of Science in Information Technology</option>
              <option value="bsis">Bachelor of Science in Information Systems</option>
              <option value="bsemc">Bachelor of Science in Entertainment and Multimedia Computing</option>
              <option value="bsce">Bachelor of Science in Civil Engineering</option>
              <option value="bsee">Bachelor of Science in Electrical Engineering</option>
              <option value="bsie">Bachelor of Science in Industrial Engineering</option>
              <option value="bsme">Bachelor of Science in Mechanical Engineering</option>
              <option value="bsa">Bachelor of Science in Architecture</option>
              <option value="bsea">Bachelor of Science in Astronomy</option>
            </select>
          </div>

          <br />
          <br />
            
          <div className="button-group">
            <button type="button" className="btn edit-btn" onClick={handleEditToggle}>{isEditable ? 'Cancel' : 'Edit'}</button>
            <button onClick={() => navigate(-1)} type="button" className="btn back-btn">Back</button>
            <button type="submit" className="btn save-btn" disabled={!isEditable}>Save</button>
          </div>
          {isPopupVisible && (<div className="popup"><p>Student info has been saved successfully!</p></div>)}
          <br></br>
          <br></br>
        </div>
      </form>
      
    </main>
  );
};

export default Forms;
