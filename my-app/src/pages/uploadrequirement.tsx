import React, { useState } from 'react';
import Header from "../components/Header";
import ParentConsentField from "../components/ParentConsentLetter";
import Resume from "../components/Resume";
import MedicalExam from '../components/MedicalExam';
import PsychologyExam from '../components/PsychologyExam';
import "../styles/Uploadrequirement.css";

const UploadRequirement: React.FC = () => {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    parentConsent: null,
    resume: null,
    medicalExam: null,
    psychologyExam: null,
  });

  const [isValidated, setIsValidated] = useState<boolean>(false);

  // Callback to update the file in state
  const handleFileChange = (fieldName: string, file: File | null) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };

  const handleUploadAndValidation = () => {
    // Check if all files are uploaded (not null)
    const allFilesUploaded = Object.values(files).every(file => file !== null);

    if (allFilesUploaded) {
      console.log("Uploading files:", files);
      // Perform your upload logic here (e.g., send files to server)

      // Trigger MOA validation
      console.log("MOA Validation triggered!");
      setIsValidated(true);  // Set validation status after the files are uploaded
    } else {
      alert("Please upload all required files before proceeding.");
    }
  };

  return (
    <div className="body">
      <div className="app-container">
        <Header />
        <div className="container-wrapper">
          <p className="Upload-Requirements">Upload Requirements</p>
          <p className="pdf-info">(PDF only)</p>
          <ParentConsentField onFileChange={(file) => handleFileChange('parentConsent', file)} />
          <Resume onFileChange={(file) => handleFileChange('resume', file)} />
          <MedicalExam onFileChange={(file) => handleFileChange('medicalExam', file)} />
          <PsychologyExam onFileChange={(file) => handleFileChange('psychologyExam', file)} />

          {/* Upload and MOA Validation button */}
          <button className="upload-button" onClick={handleUploadAndValidation}>
            {isValidated ? "Files Uploaded and Validated" : "Upload "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadRequirement;
