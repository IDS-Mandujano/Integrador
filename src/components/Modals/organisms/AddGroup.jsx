import { useState } from "react";
import { fetchData } from "../../../utils/fetch";
import handleStatusCode from "../../../utils/messages";
import Input from "../atoms/Input";
import ModalFooter from "../molecules/ModalFooter";
import ModalHeader from "../molecules/ModalHeader";

function AddGroup({ show, handleClose, handleSave }) {
  const token = localStorage.getItem('authToken');
  const [formData, setFormData] = useState({ Asignatura: "", Grado: "", Grupo: "" });
  const [errors, setErrors] = useState({ Asignatura: "", Grado: "", Grupo: "" });

  const validateInput = (name, value) => {
    if (value === "") {
      return ""; // Permitir valores vacíos
    }
    switch (name) {
      case 'Asignatura':
        if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s]*$/.test(value)) {
          return "La Asignatura debe iniciar con una letra mayúscula.";
        }
        break;
      case 'Grado':
        if (!/^\d$/.test(value)) {
          return "El Grado debe ser un solo número.";
        }
        break;
      case 'Grupo':
        if (!/^[A-Z]$/.test(value)) {
          return "El Grupo debe ser una sola letra mayúscula.";
        }
        break;
      default:
        return "";
    }
    return "";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateInput(name, value);
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
  }

  const handleAgregarGrupo = async (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_LOCAL_API}/grupos`;
    console.log("Datos enviados: ", formData);

    try {
      const data = await fetchData(url, 'POST', token, formData);
      console.log("Respuesta del servidor: ", data.status);
      handleStatusCode(data.status);
      handleSave(data.data);
      handleClose();
    } catch (error) {
      handleStatusCode(500);
    }
  }

  if (!show) return null;

  const inputStyle = "border border-teal-500 w-full px-3 py-2 my-2 rounded";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-25" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-lg mx-auto">
        <ModalHeader className={"bg-teal-500"} image="Icons/group.png" title="Agregar Grupo" />
        <form onSubmit={handleAgregarGrupo} className="flex flex-col space-y-4">
          <Input type="text" name="Asignatura" className={inputStyle} value={formData.Asignatura} onChange={handleChange} placeholder="Asignatura" required />
          {errors.Asignatura && <span className="text-red-500">{errors.Asignatura}</span>}
          <Input type="text" name="Grado" className={inputStyle} value={formData.Grado} onChange={handleChange} placeholder="Grado" required />
          {errors.Grado && <span className="text-red-500">{errors.Grado}</span>}
          <Input type="text" name="Grupo" className={inputStyle} value={formData.Grupo} onChange={handleChange} placeholder="Grupo" required />
          {errors.Grupo && <span className="text-red-500">{errors.Grupo}</span>}
        </form>
        <div className="mt-4 flex justify-end space-x-4">
          <ModalFooter isTemario={false} action1="Agregar" action2="Cancelar" handleClose={handleClose} fetch={handleAgregarGrupo} action1S="bg-teal-500 text-white" action2S="bg-red-500 text-white" />
        </div>
      </div>
    </div>
  );
}

export default AddGroup;