import { useState, useEffect } from "react";
import Button from "../atoms/Button";
import FileUpload from "../molecules/FileUpload";

function ModalTareas({ task, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isTaskSubmitted, setIsTaskSubmitted] = useState(false); // Estado para verificar si la tarea ha sido subida
  const url = `${import.meta.env.VITE_LOCAL_API}/tarea`;
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const checkTaskStatus = async () => {
      if (!task || !token) return;

      try {
        const response = await fetch(`${url}/checkStatus/${task.IdActividad}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setIsTaskSubmitted(result.submitted);
        } else {
          console.error('Error checking task status:', response.statusText);
        }
      } catch (error) {
        console.error('Error checking task status:', error);
      }
    };

    checkTaskStatus();
  }, [task, token, url]);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function handleSubmit() {
    if (!token) {
      console.error("No auth token found");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('idActividad', task.IdActividad);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Tarea creada:', result);
        setIsTaskSubmitted(true);
        onClose();
      } else {
        console.error('Error creando la tarea:', response.statusText);
      }
    } catch (error) {
      console.error('Error creando la tarea:', error);
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 relative w-96">
        <FileUpload onFileChange={handleFileChange} />
        <div className="flex justify-between">
          <Button
            text="Eliminar tarea"
            onClick={() => console.log("Eliminar tarea")}
            className="bg-red-500 text-white hover:bg-red-600"
          />
          <Button
            text="Subir tarea"
            onClick={handleSubmit}
            className="bg-teal-500 text-white hover:bg-teal-600"
            disabled={isTaskSubmitted}
          />
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ModalTareas;