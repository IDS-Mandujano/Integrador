import Button from '../atoms/Button';
import Label from '../atoms/Label';

function TaskItem({ task, onClick }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <Label text={`TEMA: ${task.topic}`} className="text-lg font-medium" />
      <Label text={task.description} className="text-sm text-gray-600 mb-4" />
      <Button text="Ver Tarea" onClick={onClick} className="bg-teal-500 text-white hover:bg-teal-600" />
    </div>
  );
}

export default TaskItem;