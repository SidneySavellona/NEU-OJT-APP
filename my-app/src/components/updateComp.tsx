import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/UpdateCompany.css";
import Header from "./Header";

const UpdateComp: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyContact, setCompanyContact] = useState("");
  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    const storedCompany = localStorage.getItem(`company_${id}`);
    if (storedCompany) {
      const { name, address, contact } = JSON.parse(storedCompany);
      setCompanyName(name);
      setCompanyAddress(address);
      setCompanyContact(contact);
    }
  }, [id]);

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();

    const companyData = {
      name: companyName,
      address: companyAddress,
      contact: companyContact,
    };

    localStorage.setItem(`company_${id}`, JSON.stringify(companyData));
    alert("Company saved successfully!");
    setIsEditing(false); 
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this company?");
    if (confirmDelete) {
      localStorage.removeItem(`company_${id}`); 
      alert("Company deleted successfully!");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="text-center w-100">
          <Header />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mb-4">Update Company</h3>
          </div>
        </div>
        <form onSubmit={handleSave}>
          <div className="mb-3 row">
            <label htmlFor="companyName" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                disabled={!isEditing} 
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="companyAddress" className="col-sm-2 col-form-label">Address:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="companyAddress"
                placeholder="Enter company address"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                disabled={!isEditing} 
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="companyContact" className="col-sm-2 col-form-label">Contact:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="companyContact"
                placeholder="Enter contact number"
                value={companyContact}
                onChange={(e) => setCompanyContact(e.target.value)}
                disabled={!isEditing} 
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary me-2" onClick={() => setIsEditing(true)}>Edit</button>
            <button type="button" className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
            <button type="submit" className="btn save-btn">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateComp;