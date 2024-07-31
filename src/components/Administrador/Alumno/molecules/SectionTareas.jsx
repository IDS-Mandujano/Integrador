import { useState, useEffect } from "react";
import { fetchData } from "../../../../utils/fetch";
import Title from "../atoms/Title";
import TareasContainer from "../molecules/TareasContainer";
import AddTarea from "../../../Modals/organisms/AddTarea";
import AddTemario from "../../../Modals/organisms/AddTemario";
import Button from "../atoms/Button";

function SectionTareas() {
  const [openAddTarea, setOpenAddTarea] = useState(false);
  const [openAddTemario, setOpenAddTemario] = useState(false);
  const [tareas, setTareas] = useState([]);

  const id = sessionStorage.getItem('IdGrupo');
  const url = `${import.meta.env.VITE_LOCAL_API}/actividades/obtenerActividadesPorGrupo`;
  const token = localStorage.getItem('authToken');

  const style = "bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition duration-300"

  const fetchTareas = async () => {
    try {
      const data = await fetchData(url, 'POST', token, { IdGrupo: id });
      if (data.data && Array.isArray(data.data)) {
        console.log(data.data);
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
    <div className="relative bg-gray-100 rounded-lg shadow-lg p-6 md:p-8 mb-8 max-h-96 overflow-y-auto">
      <Title className="text-3xl font-bold text-gray-800 mb-6" title="Actividades" />

      <div className="flex justify-end space-x-4 mb-6">
        <Button text="Agregar Tarea" onClick={() => setOpenAddTarea(true)} className={style}/>
        <Button text="Agregar Temario" onClick={() => setOpenAddTemario(true)} className={style}/>
        <Button text="Contenido" onClick={() => console.log("Vista contenido")} className={style}/>
      </div>

      <div className="flex flex-wrap gap-6 mt-6">
        {Array.isArray(tareas) && tareas.length > 0 ? (
          tareas.map((item, index) => (
            <TareasContainer key={index} id={item.IdActividad} IdGrupo={id} parcial={item.Parcial} title={item.Tema}  
            subtitle={item.Subtema} description={item.Descripcion} fetchTareas={fetchTareas} 
            />))
        ) : ( <p className="text-gray-500">No hay actividades disponibles.</p>) }
      </div>
      <AddTarea show={openAddTarea} handleClose={() => setOpenAddTarea(false)} id={id} fetchTareas={fetchTareas} />
      <AddTemario show={openAddTemario} handleClose={() => setOpenAddTemario(false)} />
    </div>
  );
}

export default SectionTareas;