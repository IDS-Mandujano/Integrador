import { useState, useEffect } from "react";
import ModalTareas from "../../../Modals/organisms/ModalTareas";
import TaskItem from "./TaskItem";
import Title from "../atoms/Title";
import { fetchData } from "../../../../utils/fetch";

function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("authToken");
  const url = `${import.meta.env.VITE_LOCAL_API}/actividades/obtenerActividadesPorGrupo`;
  
  const IdGrupo = sessionStorage.getItem("idGrupoAlumno");
  console.log('IdGrupo:', IdGrupo);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const body = { IdGrupo };
        const fetchedTasks = await fetchData(url, "POST", token, body);
        if (fetchedTasks.status === 200) {
          setTasks(fetchedTasks.data);
        } else {
          console.error("Error fetching tasks:", fetchedTasks.data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [token, IdGrupo]);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col">
      <Title className="text-xl font-bold text-center bg-teal-500 text-white rounded-t-lg py-2" text="Tareas asignadas" />
      <div className="overflow-y-auto flex-1 p-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.IdActividad} tema={task.Tema} descripcion={task.Descripcion} onClick={() => handleTaskClick(task)}/>
          ))
        ) : (
          <p className="text-center">No hay tareas asignadas.</p>
        )}
      </div>
      {showModal && selectedTask && (<ModalTareas task={selectedTask} show={showModal} handleClose={handleCloseModal}/>)}
    </div>
  );
}

export default TaskContainer;