import { useState, useEffect } from "react";
import { fetchData } from "../../../utils/fetch";
import fieldTarea from "../../../data/fieldTarea";
import ModalHeader from "../molecules/ModalHeader";
import ModalFooter from "../molecules/ModalFooter";
import Input from "../atoms/Input";
import ParcialSelect from "../molecules/ParcialSelect";
import handleStatusCode from "../../../utils/messages";

function EditActividad({ show, handleClose, id,idGrupo }) {
  if (!show) return null;

  const token = localStorage.getItem('authToken');
  const [formData, setFormData] = useState(() =>
    fieldTarea.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  useEffect(() => {
    const fetchActividad = async () => {
      try {
        const url = `${import.meta.env.VITE_LOCAL_API}/actividades/porId`;
        const response = await fetchData(url, 'POST', token, { IdActividad: id });
        
        if (response.data) {
          setFormData(response.data);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching activity data:", error);
      }
    };

    if (id) {
      fetchActividad();
    }
  }, [id, token]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleUpdateActividad = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_LOCAL_API}/actividades/`;
      const response = await fetchData(url, 'PUT', token, { ...formData, IdActividad: id, IdGrupo: idGrupo });
  
      if (response.status === 200) {
        console.log("Respuesta del servidor: ", response.status);
        handleStatusCode(response.status);
        handleClose();
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error en la actualización de la actividad:", error);
      handleStatusCode(500);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-11/12 max-w-lg mx-auto">
        <ModalHeader title="Editar Actividad" image="Icons/edit.png" className="bg-teal-500" text="Edita los detalles de la tarea" />
        <form onSubmit={handleUpdateActividad} className="p-4 flex flex-col items-center">
          {fieldTarea
            .filter(field => field.name !== 'IdGrupo' && field.name !== 'IdActividad')
            .map((field, index) => (
              field.type === "textarea" ? (
                <textarea key={index} name={field.name} placeholder={field.placeholder} 
                className="mb-4 border border-teal-600 rounded-sm p-2 h-32 w-full resize-none" value={formData[field.name] || ""} 
                onChange={handleChange}/>
              ) : field.name === "Parcial" ? (
                <ParcialSelect key={index} name={field.name} value={formData[field.name] || ""} onChange={handleChange}/>
              ) : (
                <Input key={index} type={field.type} placeholder={field.placeholder} name={field.name}
                  className="mb-4 border border-teal-600 rounded-sm p-2 w-full" value={formData[field.name] || ""} onChange={handleChange}/>
              )
            ))}
          <div className="mt-4 flex justify-end space-x-4 w-full">
            <ModalFooter isTemario={false} action1="Guardar" action2="Cancelar" handleClose={handleClose}
              fetch={handleUpdateActividad} action1S="bg-teal-500 text-white" action2S="bg-gray-500 text-white"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditActividad;