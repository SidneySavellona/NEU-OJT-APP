import React from "react";
import { Link } from "react-router-dom";
import "../styles/UpdateCompany.css";
import Header from "./Header";


const updateComp: React.FC = () => {
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
        <form>
          <div className="mb-3 row">
            <label htmlFor="companyName" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="companyName" placeholder="Enter company name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="companyAddress" className="col-sm-2 col-form-label">Address:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="companyAddress" placeholder="Enter company address" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="companyContact" className="col-sm-2 col-form-label">Contact:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="companyContact" placeholder="Enter contact number" />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary me-2">Edit</button>
            <button type="button" className="btn btn-danger me-2">Delete</button>
            <button type="button" className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default updateComp;
