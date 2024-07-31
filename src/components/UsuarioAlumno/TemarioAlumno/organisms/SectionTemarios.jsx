import { useState, useEffect } from "react";
import { fetchData } from "../../../../utils/fetch";
import TemariosCard from "../molecules/TemariosCard";
import handleStatusCode from "../../../../utils/messages";

function SectionTemarios() {
  const token = localStorage.getItem('authToken');
  const id = sessionStorage.getItem('idGrupo');
  const [temarios, setTemarios] = useState([]);

  console.log("Id del grupo para temario: ",id);

  useEffect(() => {
    const fetchTemarios = async () => {
      try {
        const response = await fetchData(`${import.meta.env.VITE_LOCAL_API}/temario/obtener`, 'POST', token, {idGrupo : id});
        if (response && Array.isArray(response.data)) {
          setTemarios(response.data);
        } else {
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
      {temarios.length === 0 ? (
        <p className="text-gray-500">No hay temarios disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {temarios.map((item, index) => (
            <TemariosCard key={index} filename={item.filename} idGrupo={item.idGrupo} path={item.path} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SectionTemarios;