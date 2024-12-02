import React, { useState } from "react";
import "../styles/Uploadrequirement.css";

interface FileButtonProps {
  onFileChange: (file: File | null) => void;
}

const FileButton: React.FC<FileButtonProps> = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      
      // Check if the selected file is a PDF
      if (file.type !== "application/pdf") {
        setSelectedFile(null);
        setIsValidated(false);
        onFileChange(null); // Pass null when the file is not valid
      } else {
        setSelectedFile(file);
        setIsValidated(true);
        onFileChange(file);
        console.log("Selected file:", file);
      }
    }
  };

  return (
    <div>
      <div id="file_input" aria-describedby="file_help" className="flex items-center">
        <input 
          type="file" 
          className="block w-full text-sm text-gray-900 border border-gray-300
          rounded-lg cursor-pointer focus:outline-none"
          aria-label="Upload your file"
          accept=".pdf" // Only PDF files
          onChange={handleFileChange} 
        />
        {isValidated && <p className="Validated-text">Validated</p>}
      </div>
    </div>
  );
};

export default FileButton;
