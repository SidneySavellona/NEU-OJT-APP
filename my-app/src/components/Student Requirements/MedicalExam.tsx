import FileButton from "./FileButton";
import "../../styles/Uploadrequirement.css";

interface MedicalExamProps {
  onFileChange: (file: File | null) => void;
}

const MedicalExam: React.FC<MedicalExamProps> = ({ onFileChange }) => {
  return (
    <div className="MedicalExam">
      <label className="MedicalExamTitle">Medical Exam</label>
      <FileButton onFileChange={onFileChange} />
    </div>
  );
};

export default MedicalExam;
