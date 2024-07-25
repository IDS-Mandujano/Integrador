import { useState } from "react";
import  Button  from "../atoms/Button";
import  FileUpload  from "../molecules/FileUpload";
import  TaskDetails from "../molecules/TaskDetails";

function ModalTareas({ task, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleSubmit() {
    console.log("Archivo seleccionado:", selectedFile);
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 relative w-96">
        <TaskDetails task={task} />
        <FileUpload onFileChange={handleFileChange} type="file"/>
        <div className="flex justify-between">
          <Button
            text="Eliminar tarea"
            onClick={() => console.log("Eliminar tarea")}
            className="bg-red-500 text-white hover:bg-red-600"
          />
          <Button
            text="Subir tarea"
            onClick={handleSubmit}
            className="bg-teal-500 text-white hover:bg-teal-600"
          />
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ModalTareas;
