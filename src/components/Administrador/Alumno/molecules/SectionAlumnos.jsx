import { useState, useEffect, useContext } from "react";
import Title from "../atoms/Title";
import AlumnoContainer from "../molecules/AlumnoContainer";
import GrupoContext from "../../../../context/grupoContext";

function SectionAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const { grupos } = useContext(GrupoContext);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (grupos && grupos.grado && grupos.grupo) {
      console.log('Enviando solicitud con:', { Grado: grupos.grado, Grupo: grupos.grupo });
      fetch(`${import.meta.env.VITE_API_URL}/alumnos/porGradoGrupo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        credentials: 'include',
        body: JSON.stringify({
          Grado: grupos.grado,
          Grupo: grupos.grupo
        })
      })
        .then(response => {
          if (response.ok) return response.json();
          else throw new Error('Error al conectarse al servidor');
        })
        .then(data => {
          setAlumnos(data);
          console.log('Alumnos recibidos:', data);
        })
        .catch(error => {
          console.log('Error en la solicitud al servidor', error);
        });
    } else {
      console.log('Grado o grupo no disponible en el contexto');
    }
  }, [grupos, token]);

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 mb-8 max-h-96 overflow-y-auto">
      <Title className="text-3xl font-bold text-gray-800 mb-4" title={`Alumnos del ${grupos.grado} - ${grupos.grupo}`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {alumnos.length > 0 ? (
          alumnos.map((item, index) => (
            <AlumnoContainer key={index} imageUrl="vite.svg" name={item.Nombre} matricula={item.Matricula} />
          ))
        ) : (
          <p>No hay alumnos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default SectionAlumnos;