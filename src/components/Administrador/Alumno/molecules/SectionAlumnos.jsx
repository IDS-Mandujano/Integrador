import { useState, useEffect} from "react";
import Title from "../atoms/Title";
import AlumnoContainer from "../molecules/AlumnoContainer";
import { fetchData } from "../../../../utils/fetch";

function SectionAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  const url = `${import.meta.env.VITE_LOCAL_API}/alumnos/porGradoGrupo`
  const token = localStorage.getItem('authToken');
  const grado = sessionStorage.getItem('Grado')
  const grupo = sessionStorage.getItem('Grupo')

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const data = await fetchData(url, 'POST', token, {Grado: grado, Grupo: grupo});
        setAlumnos(data);
      } catch (error) {
        console.log('Error al obtener alumnos:', error);
      }
    };

    if (grado && grupo) {
      fetchAlumnos();
    }

  }, [token]);

  const handleAlumnoEliminado = (matricula) => {
    setAlumnos(alumnos.filter(alumno => alumno.Matricula !== matricula));
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 mb-8 max-h-96 overflow-y-auto">
      <Title className="text-3xl font-bold text-gray-800 mb-4" title={`Alumnos del ${grado} - ${grupo}`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {alumnos.length > 0 ? (
          alumnos.map((item, index) => (
            <AlumnoContainer key={index} imageUrl="vite.svg" name={item.Nombre}
              matricula={item.Matricula} onAlumnoEliminado={handleAlumnoEliminado} 
            />
          ))
        ) : (
          <p>No hay alumnos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default SectionAlumnos;