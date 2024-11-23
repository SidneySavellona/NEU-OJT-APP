import React from "react";
import styles from "../styles/Dashboard.module.css";

const MainOptions: React.FC = () => {

    return(
        <section className="options">
            <button className="option-button"><img src="neu_logo.png" alt="Enter Student Input" />Enter Student Input</button>
            <button className="option-button"><img src="neu_logo.png" alt="Upload Requirements" />Upload Requirements</button>
            <button className="option-button"><img src="neu_logo.png" alt="Generate Endorsement Letter" />Generate Endorsement Letter</button>
            <button className="option-button"><img src="neu_logo.png" alt="Update Company" />Update Company</button>
        </section>
    )
}

export default MainOptions;
