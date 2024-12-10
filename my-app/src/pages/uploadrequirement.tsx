import React, { useState } from 'react';
import Header from "../components/Header";
import ParentConsentField from "../components/Student Requirements/ParentConsentLetter";
import Resume from "../components/Student Requirements/Resume";
import MedicalExam from '../components/Student Requirements/MedicalExam';
import PsychologyExam from '../components/Student Requirements/PsychologyExam';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from "../services/firebase";
import "../styles/Uploadrequirement.css";

const UploadRequirement: React.FC = () => {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    parentConsent: null,
    resume: null,
    medicalExam: null,
    psychologyExam: null,
  });

  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const handleFileChange = (fieldName: string, file: File | null) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };

  const uploadFileToFirebase = async (file: File) => {
    const fileName = file.name;
    const fileRef = ref(storage, `studentRequirements/${fileName}`); 
    await uploadBytes(fileRef, file); 
  };
  

  const handleUploadAndValidation = async () => {
    const allFilesUploaded = Object.values(files).every(file => file !== null);

    if (allFilesUploaded) {
      if (files.parentConsent) await uploadFileToFirebase(files.parentConsent);
      if (files.resume) await uploadFileToFirebase(files.resume);
      if (files.medicalExam) await uploadFileToFirebase(files.medicalExam);
      if (files.psychologyExam) await uploadFileToFirebase(files.psychologyExam);

      setIsUploaded(true);  
    } else {
      alert("Please upload all requirement files before proceeding.");
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

          <button className="upload-button" onClick={handleUploadAndValidation}>
            {isUploaded ? "Files Uploaded" : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadRequirement;
