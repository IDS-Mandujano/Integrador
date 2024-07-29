import { useState } from "react";
import ModalHeader from "../molecules/ModalHeader";
import ModalFooter from "../molecules/ModalFooter";
import Input from "../atoms/Input";
import handleStatusCode from "../../../utils/messages";

function AddTemario({ show, handleClose}) {
  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState("");

  const idGrupo = sessionStorage.getItem('IdGrupo')

  if (!show) return null;

  const handleChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const validateInputs = () => {
    if (!archivo) {
      setError("El archivo es requerido.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateInputs()) return;
  
    const url = `${import.meta.env.VITE_LOCAL_API}/temario/`;
    const token = localStorage.getItem('authToken');
    const formDataToSend = new FormData();
  
    formDataToSend.append('idGrupo', idGrupo);
    formDataToSend.append('archivo', archivo);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `${token}`,
        },
        body: formDataToSend,
      });
  
      const contentType = response.headers.get('content-type');
      let data;
  
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log('Temario agregado exitosamente:', data);
      handleStatusCode(response.status);
      handleClose();
    } catch (error) {
      console.error('Error en la solicitud:', error);
      handleStatusCode(500);
    }
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 max-w-lg">
        <ModalHeader title="Agregar Temario" text="Sube un archivo PDF" image="Icons/upload_pdf.jpeg" className="bg-teal-600" />
        <form onSubmit={handleSubmit} className="p-4 flex flex-col">
          <Input 
            type="file" 
            name="archivo" 
            className="mb-4" 
            onChange={handleChange} 
          />
          {error && <span className="text-red-500 mb-2">{error}</span>}
          
          <ModalFooter
            action1="Subir PDF"
            action2="Cancelar"
            handleClose={handleClose}
            action1S="bg-teal-500 text-white"
            action2S="bg-gray-500 text-white"
            action1Handler={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default AddTemario;
