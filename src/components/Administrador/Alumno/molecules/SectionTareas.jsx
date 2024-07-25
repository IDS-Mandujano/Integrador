import { useState, useEffect } from "react";
import Title from "../atoms/Title";
import TareasContainer from "../molecules/TareasContainer";
import Button from "../atoms/Button";
import AddTemario from "../../../Modals/organisms/AddTemario"

function SectionTareas() {
  const [open,setOpen] = useState(false)
  const [tareas, setTareas] = useState([]);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (token) {
      const fetchTareas = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/tarea`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${token}`,
            },
            credentials: 'include',
          });
          if (response.ok) {
            const data = await response.json();
            setTareas(data);
          } else {
            throw new Error('Error al comunicarse con el servidor');
          }
        } catch (error) {
          console.log('Error durante la solicitud', error);
        }
      };

      fetchTareas();
    } else {
      console.log('No se encontró un token de autenticación');
    }
  }, [token]);

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 mb-8 max-h-96 overflow-y-auto">
      <Title className="text-3xl font-bold text-gray-800 mb-4" title="Actividades" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          tareas.map((item, index) => (
            <TareasContainer key={index} title={item.title || "Título de la tarea"}
              description={item.description || "Descripción de la tarea"}
              name={item.filename} path={item.path} onEditar={() => console.log("Editar", item)} 
              onEliminar={() => console.log("Eliminar", item)}
            />
          ))
        }
      </div>
      <div className="flex justify-end mt-4">
        <Button text="Agregar Tarea" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition duration-300" 
        onClick={()=>setOpen(true)}/>
        <Button text="Calificar" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300 ml-2" />
      </div>
      <AddTemario show={open} handleClose={()=> setOpen(false)}/>
    </div>
  );
}

export default SectionTareas;