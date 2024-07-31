function TaskDetails({ task, onInputChange, taskDetails }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        name="tarea"
        value={taskDetails.tarea}
        onChange={onInputChange}
        placeholder="Descripción de la tarea"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
    </div>
  );
}

export default TaskDetails;