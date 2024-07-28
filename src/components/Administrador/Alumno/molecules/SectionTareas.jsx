import { useState, useEffect } from "react";
import { fetchData } from "../../../../utils/fetch";
import Title from "../atoms/Title";
import TareasContainer from "../molecules/TareasContainer";
import Button from "../atoms/Button";
import AddTarea from "../../../Modals/organisms/AddTarea";
import handleStatusCode from "../../../../utils/messages";

function SectionTareas() {
  const [open, setOpen] = useState(false);
  const [tareas, setTareas] = useState([]);

  const id = sessionStorage.getItem('IdGrupo');
  const url = `${import.meta.env.VITE_LOCAL_API}/actividades/obtenerActividadesPorGrupo`;
  const token = localStorage.getItem('authToken');

  console.log(id);

  const fetchTareas = async () => {
    try {
      const data = await fetchData(url, 'POST', token, { IdGrupo: id });
      if (data.data && Array.isArray(data.data)) {
        setTareas(data.data);
      } else {
        console.error("Unexpected response format:", data);
        setTareas([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setTareas([]);
    }
  };

  useEffect(() => {
    fetchTareas();
  }, [url, token, id]);

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 mb-8 max-h-96 overflow-y-auto">
      <Title className="text-3xl font-bold text-gray-800 mb-4" title="Actividades" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(tareas) && tareas.length > 0 ? (
          tareas.map((item, index) => (
            <TareasContainer
              key={index}
              parcial={item.Parcial}
              title={item.Tema}
              subtitle={item.Subtema}
              description={item.Descripcion}
              id={item.IdActividad}
              fetchTareas={fetchTareas}
            />
          ))
        ) : (
          <p>No hay actividades disponibles.</p>
        )}
      </div>
      <div className="flex justify-end mt-4">
        <Button 
          text="Agregar Tarea" 
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition duration-300" 
          onClick={() => setOpen(true)} 
        />
        <Button 
          text="Calificar" 
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300 ml-2" 
        />
      </div>
      <AddTarea show={open} handleClose={() => setOpen(false)} id={id} />
    </div>
  );
}

export default SectionTareas;