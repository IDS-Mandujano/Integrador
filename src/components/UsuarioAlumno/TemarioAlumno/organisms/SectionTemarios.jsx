import { useState, useEffect } from "react";
import { fetchData } from "../../../../utils/fetch";
import TemariosCard from "../molecules/TemariosCard";
import handleStatusCode from "../../../../utils/messages";

function SectionTemarios() {
  const token = localStorage.getItem('authToken');
  const id = sessionStorage.getItem('idGrupoAlumno')
  const [temarios, setTemarios] = useState([]);

  useEffect(() => {
    const fetchTemarios = async () => {
      try {
        const response = await fetchData(`${import.meta.env.VITE_LOCAL_API}/temario/obtener`, 'POST', token, {idGrupo : id});
        if (response && Array.isArray(response.data)) {
          setTemarios(response.data);
        } else {
          handleStatusCode(response.status);
          setTemarios([]);
        }
      } catch (error) {
        handleStatusCode(500);
        setTemarios([]);
      }
    };

    fetchTemarios();
  }, [token]);

  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {temarios.map((item, index) => (
          <TemariosCard  key={index} filename={item.filename} idGrupo={item.idGrupo}  path={item.path}/>
        ))}
      </div>
    </div>
  );
}

export default SectionTemarios;