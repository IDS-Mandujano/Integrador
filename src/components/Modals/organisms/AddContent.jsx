import { useState } from "react";
import ContentField from "../molecules/ContentField";
import ModalFooter from "../molecules/ModalFooter";
import ModalHeader from "../molecules/ModalHeader";

function AddContent({ show, handleClose, handleSave }) {
  const [formData, setFormData] = useState({ file: null, content: "" });
  const [contentType, setContentType] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleContentTypeChange = (type) => {
    setContentType(type);
    setFormData({ file: null, content: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-25" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-lg mx-auto">
        <ModalHeader className={"bg-teal-500"} image="Icons/content.png" title="Agregar Contenido" />
        <div className="mb-4 flex space-x-4">
          <button onClick={() => handleContentTypeChange("file")}
            className={`py-2 px-4 rounded ${contentType === "file" ? "bg-teal-500 text-white" : "bg-gray-200"}`}>Subir PDF</button>
          <button onClick={() => handleContentTypeChange("content")}
            className={`py-2 px-4 rounded ${contentType === "content" ? "bg-teal-500 text-white" : "bg-gray-200"}`}>Generar Contenido
          </button>
        </div>
        <form className="flex flex-col space-y-4">
          <ContentField contentType={contentType} formData={formData} handleChange={handleChange} />
        </form>
        <div className="mt-4 flex justify-end space-x-4">
          <ModalFooter isTemario={false} action1="Guardar" action2="Cancelar" handleClose={handleClose} fetch={handleSubmit} 
          action1S="bg-teal-500 text-white" action2S="bg-red-500 text-white"/>
        </div>
      </div>
    </div>
  );
}

export default AddContent;