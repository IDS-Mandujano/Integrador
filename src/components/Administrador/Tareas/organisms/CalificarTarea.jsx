import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../molecules/Card';
import Text from '../atoms/Text';
import { fetchData, postData } from '../../../../utils/fetch'; // Asume que tienes estas funciones

function CalificarTarea() {
  const { id } = useParams();
  const [tarea, setTarea] = useState(null);
  const [alumnos, setAlumnos] = useState([]);
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const tareaUrl = `${import.meta.env.VITE_LOCAL_API}/tareas/${id}`;
        const tareaData = await fetchData(tareaUrl, "GET");
        setTarea(tareaData);

        const alumnosUrl = `${import.meta.env.VITE_LOCAL_API}/alumnos/${tareaData.idGrupo}`;
        const alumnosData = await fetchData(alumnosUrl, "GET");
        setAlumnos(alumnosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromAPI();
  }, [id]);

  const handleFileChange = async (e, alumnoId) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const uploadUrl = `${import.meta.env.VITE_LOCAL_API}/entregas/${id}/${alumnoId}`;
        const response = await postData(uploadUrl, formData, "POST", {
          'Content-Type': 'multipart/form-data'
        });

        if (response.ok) {
          setStatus(prevStatus => ({ ...prevStatus, [alumnoId]: 'Entregada' }));
        } else {
          setStatus(prevStatus => ({ ...prevStatus, [alumnoId]: 'Error al entregar' }));
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setStatus(prevStatus => ({ ...prevStatus, [alumnoId]: 'Error al entregar' }));
      }
    } else {
      setStatus(prevStatus => ({ ...prevStatus, [alumnoId]: 'No es un PDF' }));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Calificar Tarea</h1>
      {tarea && (
        <>
          <Text text={tarea.title} className="text-xl font-semibold" />
          <Text text={tarea.description} className="text-sm" />
          <div className="mt-4">
            {alumnos.map(alumno => (
              <Card
                key={alumno.id}
                alumno={alumno}
                status={status[alumno.id]}
                onFileChange={handleFileChange}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CalificarTarea;