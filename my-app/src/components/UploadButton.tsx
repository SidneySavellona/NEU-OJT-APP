import React from "react";

interface UploadButtonProps {
  onUpload: () => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onUpload }) => {
  return (
    <button className="upload-button" onClick={onUpload}>
      Upload
    </button>
  );
};

export default UploadButton;

