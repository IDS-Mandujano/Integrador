function TaskDetails({ task }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Tema: {task.topic}</h2>
        <p className="text-lg mb-2">Descripción</p>
        <p className="mb-4">{task.description}</p>
        <div className="mb-4">
          <p className="text-lg">Contenido:</p>
          <div className="mt-2 flex justify-center">
            <img src="Icons/upload_pdf.jpeg" alt="" className="w-24 h-24" />
          </div>
        </div>
      </div>
    );
} 

export default TaskDetails