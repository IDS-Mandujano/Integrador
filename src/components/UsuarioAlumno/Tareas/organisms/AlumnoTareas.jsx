// AlumnosTareas.jsx
import { useState } from "react";
import ModalTareas from "../../../Modals/organisms/ModalTareas";
import StudentItem from "../molecules/StudentItem";
import TaskItem from "../molecules/TaskItem";

const students = [
  { id: 1, matricula: "233361", name: "Hugo Francisco" },
  { id: 2, matricula: "233362", name: "Ana Maria" },
  // Más estudiantes
];

const tasks = [
  { id: 1, topic: "Subtema 1", description: "Descripcion de la tarea 1." },
  { id: 2, topic: "Subtema 2", description: "Descripcion de la tarea 2." },
  // Más tareas
];

function AlumnoTareas() {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="p-8 bg-gray-200 h-screen flex flex-col lg:flex-row gap-8">
      <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col">
        <h2 className="text-xl font-bold text-center bg-teal-500 text-white rounded-t-lg py-2">Alumnos Inscritos</h2>
        <div className="overflow-y-auto flex-1 p-2">
          {students.map((student) => (
            <StudentItem key={student.id} student={student} />
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col">
        <h2 className="text-xl font-bold text-center bg-teal-500 text-white rounded-t-lg py-2">Tareas asignadas</h2>
        <div className="overflow-y-auto flex-1 p-2">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onClick={() => setSelectedTask(task)} />
          ))}
        </div>
      </div>

      {selectedTask && <ModalTareas task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </div>
  );
}

export default AlumnoTareas;