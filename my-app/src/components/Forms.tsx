import React from "react";
import "../styles/studentInfo.css"
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Forms: React.FC = () => {
  const navigate = useNavigate();

    return (
        <main className="form-container">
        <form>
            <Header />
            <br></br>
            <br></br>
          <div className="container">
            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
            <label htmlFor="firstName">Middle Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div className="form-group">
            <label htmlFor="block">Block</label>
            <input type="text" id="block" name="block"/>
            <label htmlFor="adviser">Adviser</label>
            <input type="text" id="adviser" name="adviser" />
            <label htmlFor="semester">Semester</label>
            <input type="text" id="semester" name="semester"/>  
          </div>

          <div className="form-group">
            <label htmlFor="ay"> School Year</label>
            <select name="schoolYear" className="schoolYear">
              <option value="2425">2024-2025</option>
              <option value="2425">2025-2026</option>
              <option value="2425">2026-2027</option>
            </select>
            <label htmlFor="ay"> Student ID</label>
            <input type="text" id="studentID" name="studentID"/>
            <label htmlFor="ay">Course</label>
            <select name="course" className="course">
            <option value=""disabled>Select a course</option>
            <option value=""disabled hidden>Select a course</option>
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

         
          <div className="button-group">
            <button onClick={() => {navigate(-1)}} type="button" className="btn back-btn">Back</button>
            <button type="submit" className="btn save-btn">Save</button>
          </div>                
        </div>    
          
        </form>
      </main>
    )
}

export default Forms;