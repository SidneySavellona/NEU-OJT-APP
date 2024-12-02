import FileButton from "./FileButton";
import "../../styles/Uploadrequirement.css";

interface PsychologyExamProps {
  onFileChange: (file: File | null) => void;
}

const PsychologyExam: React.FC<PsychologyExamProps> = ({ onFileChange }) => {
  return (
    <div className="PsychologyExam">
      <label className="PsychologyExamTitle">Psychology Exam</label>
      <FileButton onFileChange={onFileChange} />
    </div>
  );
};

export default PsychologyExam;
