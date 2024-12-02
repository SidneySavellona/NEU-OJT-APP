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
          </div>

          <div className="form-group">
            <label htmlFor="block">Block</label>
            <input type="text" id="block" name="block"/>

            <label htmlFor="adviser">Adviser</label>
            <input type="text" id="adviser" name="adviser" />
          </div>

          <div className="form-group">
            <label htmlFor="ay">A.Y</label>
            <input type="text" id="ay" name="ay"/>

            <label htmlFor="year">2024-2025</label>
            <input type="text" id="year" name="year"/>

          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester</label>
            <input type="text" id="semester" name="semester"/>
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