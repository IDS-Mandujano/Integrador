// ModalTareas.jsx
import React, { useState } from 'react';

const ModalTareas = ({ task, onClose, token }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isTaskSubmitted, setIsTaskSubmitted] = useState(false);
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('idActividad', task.IdActividad);
    formData.append('matricula', 'tu_matricula_aqui'); // Asegúrate de que `matricula` se obtiene y envía correctamente
    formData.append('idGrupo', 'tu_idGrupo_aqui'); // Asegúrate de que `idGrupo` se obtiene y envía correctamente

    try {
      const response = await fetch('http://localhost:3000/api/tarea', {
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
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      {isTaskSubmitted && <p>Tarea enviada con éxito.</p>}
    </div>
  );
};

export default ModalTareas;
