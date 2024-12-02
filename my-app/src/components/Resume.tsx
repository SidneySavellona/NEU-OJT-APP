import FileButton from "./FileButton";
import "../styles/Uploadrequirement.css";

interface ResumeProps {
  onFileChange: (file: File | null) => void;
}

const Resume: React.FC<ResumeProps> = ({ onFileChange }) => {
  return (
    <div className="Resume">
      <label className="ResumeTitle">Resume</label>
      <FileButton onFileChange={onFileChange} />
    </div>
  );
};

export default Resume;
