import { useState, useEffect } from "react";
import ModalTareas from "../../../Modals/organisms/ModalTareas";
import TaskItem from "./TaskItem";
import Title from "../atoms/Title";
import { fetchData } from "../../../../utils/fetch";

function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const token = localStorage.getItem("authToken");
  const url = `${import.meta.env.VITE_LOCAL_API}/actividades`;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await fetchData(url, "GET", token);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [token]);

  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col">
      <Title className="text-xl font-bold text-center bg-teal-500 text-white rounded-t-lg py-2" text="Tareas asignadas" />
      <div className="overflow-y-auto flex-1 p-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} tema={task.Tema} descripcion={task.Descripcion} onClick={() => setSelectedTask(task)} />
          ))
        ) : (
          <p className="text-center">No hay tareas asignadas.</p>
        )}
      </div>
      {selectedTask && <ModalTareas task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </div>
  );
}

export default TaskContainer;