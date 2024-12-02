import React from 'react';
import "../styles/UpdateCompany.css";
import UpdateComp from '../components/updateComp';
import Header from '../components/Header';

const UpdateCompany: React.FC = () => {
    return ( 
      <div className="body">
        <div className="app-container">
          <Header />
        </div>
        <UpdateComp /> 
      </div>

    );
};

export default UpdateCompany;
