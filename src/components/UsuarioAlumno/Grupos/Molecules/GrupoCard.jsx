import { useNavigate } from "react-router-dom";
import Title from "../Atoms/Title";
import Text from "../Atoms/Text";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";

function GrupoCard({ asignatura, grado, grupo, miembros, id }) {
    const navigate = useNavigate();

    const handleInspect = (e) => {
        e.preventDefault();
        navigate("/Tareas");
        sessionStorage.setItem('idGrupoAlumno', id);
        console.log("Vista de detalles");
    };

    const handleVerTemario = (e) => {
        e.preventDefault();
        navigate("/Temario");
        sessionStorage.setItem('idGrupo', id);
        console.log("Vista del temario");
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 flex flex-col">
                <div className="flex items-center mb-2">
                    <Title text={asignatura} />
                </div>
                <div className="flex h-1/4">
                    <Text className="" text={`${grado} - ${grupo}`} />
                </div>
                <div className="flex items-center h-1/4 mt-2">
                    <Image image="Icons/group.png" className="w-8 h-8 bg-teal-500 rounded-sm" />
                    <Text className="ml-2" text={`Miembros: ${miembros}`} />
                </div>
                <div className="flex justify-between mt-2">
                    <Button onClick={handleInspect} className="bg-teal-800 text-white px-3 py-2 rounded" text="Inspeccionar" />
                    <Button onClick={handleVerTemario} className="bg-blue-800 text-white px-3 py-2 rounded" text="Ver Temario" />
                </div>
            </div>
        </div>
    );
}

export default GrupoCard;
