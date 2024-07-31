import { useState } from "react";
import ModalHeader from "../molecules/ModalHeader";
import ModalFooter from "../molecules/ModalFooter";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import { useContext } from "react";
import UserContext from "../../../context/userContext";

const ModalTareas = ({ task, show, handleClose }) => {
  const [file, setFile] = useState(null);
  const token = localStorage.getItem("authToken");
  const idGrupo = sessionStorage.getItem("idGrupoAlumno");

  const {user} = useContext(UserContext)

  if (!show) return null;

  const handleAddTarea = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("idGrupo", idGrupo);
    formData.append("idActividad", task.IdActividad);
    formData.append("matricula", user.usuario);
    formData.append("file", file);

    const options = {
      method: 'POST',
      headers: {
        'Authorization': token,
      },
      body: formData
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_LOCAL_API}/tarea/`, options);
      const status = response.status;
      console.log('Response Status:', status);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${status}`);
      }

      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log("Tarea subida exitosamente:", data);
      handleClose();
    } catch (error) {
      console.error("Error subiendo la tarea:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-600 opacity-50" onClick={handleClose}></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg mx-auto z-10">
        <ModalHeader title="Subir tarea" text="Seleccione un archivo PDF" image="Icons/upload_pdf.jpeg" />
        <form onSubmit={handleAddTarea} className="mt-4 space-y-4">
          <Text text={`Tema: ${task.Tema}`} className="text-gray-800 font-semibold text-lg" />
          <Text text={`Descripción: ${task.Descripcion}`} className="text-gray-600 text-sm" />
          <Input type="file" placeholder="Selecciona un archivo PDF" className="mt-2 border border-gray-300 rounded-lg p-2 w-full bg-gray-50" onChange={handleFileChange} />
          <div className="mt-6 flex justify-end space-x-4">
            <ModalFooter action1="Agregar" action2="Cancelar" 
            action1S="bg-teal-500 text-white hover:bg-teal-600" action2S="bg-red-500 text-white hover:bg-red-600" 
            fetch={handleAddTarea} handleClose={handleClose} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalTareas;