import TaskContainer from "../molecules/TaskContainer";
import StudentContainer from "../molecules/StudentContainer";

function AlumnoTareas() {
  return (
    <div className="p-8 bg-gray-200 h-screen flex flex-col lg:flex-row gap-8">
      <StudentContainer/>
      <TaskContainer/>
    </div>
  )
}

export default AlumnoTareas;