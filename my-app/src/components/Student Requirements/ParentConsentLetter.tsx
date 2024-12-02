import FileButton from "./FileButton";
import "../../styles/Uploadrequirement.css";

interface ParentConsentLetterProps {
  onFileChange: (file: File | null) => void;
}

const ParentConsentLetter: React.FC<ParentConsentLetterProps> = ({ onFileChange }) => {
  return (
    <div className="ParentsConsent">
      <label className="ParentConsentTitle">Parent Consent Letter</label>
      <FileButton onFileChange={onFileChange} />
    </div>
  );
};

export default ParentConsentLetter;
