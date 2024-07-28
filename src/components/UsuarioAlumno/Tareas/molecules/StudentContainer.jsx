import { useState, useEffect, useContext } from "react";
import StudentItem from "./StudentItem";
import Title from "../atoms/Title";
import { fetchData } from "../../../../utils/fetch";
import UserContext from "../../../../context/userContext";

function StudentContainer() {
  const [students, setStudents] = useState([]);
  const { user } = useContext(UserContext);
  const url = `${import.meta.env.VITE_LOCAL_API}/alumnos/porGradoGrupo`;
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await fetchData(url, "POST", token, { Grado: user.grado, Grupo: user.grupo });
        console.log(user.grado, user.grupo);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, [token, user.grado, user.grupo]);

  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col">
      <Title className="text-xl font-bold text-center bg-teal-500 text-white rounded-t-lg py-2" text="Alumnos Inscritos" />
      <div className="overflow-y-auto flex-1 p-2">
        {students.length > 0 ? (
          students.map((student) => (
            <StudentItem key={student.matricula} matricula={student.Matricula} name={`${student.Nombre} ${student.ApellidoP} ${student.ApellidoM}`} />
          ))
        ) : (
          <p className="text-center">No hay alumnos inscritos.</p>
        )}
      </div>
    </div>
  );
}

export default StudentContainer;
