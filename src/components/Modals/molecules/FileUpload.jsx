import Input  from "../atoms/Input";
import Label  from "../atoms/Label";

export function FileUpload({ onFileChange,type }) {
  return (
    <div className="mb-4">
      <Label text="Subir archivo" />
      <Input type={type} onChange={onFileChange} />
    </div>
  )}

  export default FileUpload