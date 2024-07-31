import { useEffect,useState } from "react";
import {fetchData} from "../../../../utils/fetch"
import CardStudent from "../molecules/CardStudent";
import Tarea from "../molecules/Tarea";
import handleStatusCode from "../../../../utils/messages";

function Calificar() {
  const [alumnos, setAlumnos] = useState([]);
  const url = `${import.meta.env.VITE_LOCAL_API}/alumnos/porGradoGrupo`
  const token = localStorage.getItem('authToken');
  const grado = sessionStorage.getItem('Grado')
  const grupo = sessionStorage.getItem('Grupo')

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const data = await fetchData(url,'POST',token, {Grado: grado, Grupo: grupo});
        setAlumnos(data.data);
      } catch (error) {
        handleStatusCode(500)
      }
    };

    if (grado && grupo) {
      fetchAlumnos();
      console.log(alumnos.length)
      localStorage.setItem('members',alumnos.length)
    }

  }, [token]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <Tarea/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {alumnos.length > 0 ? (
          alumnos.map((item, index) => (
            <CardStudent key={index} name={item.Nombre}
            matricula={item.Matricula} grado={grado} grupo={grupo}/>
          ))
        ) : (
          <p>No hay alumnos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Calificar;