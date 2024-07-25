// components/molecules/GrupoCard.js
import { useNavigate } from "react-router-dom";
import Title from "../Atoms/Title";
import Text from "../Atoms/Text";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";

function GrupoCard({ asignatura, grado, grupo, miembros }) {
    const navigate = useNavigate();

    const handleInspect = (e) => {
        e.preventDefault();
        navigate("/Tareas");
        console.log("vista de detalles");
    };

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md p-4 w-full h-full">
            <div className="flex ml-8 items-center h-1/4">
                <Title text={asignatura} />
            </div>
            <div className="flex h-1/4">
                <Text className="ml-8" text={`${grado} - ${grupo}`} />
            </div>
            <div className="flex items-center h-1/4 ml-8">
                <Image image="vite.svg" />
                <Text text={`${miembros} - Miembros`} />
            </div>
            <div className="flex h-1/4">
                <Button onClick={handleInspect} className="text-white bg-teal-800 rounded w-2/5 ml-8" text="Inspeccionar" />
            </div>
        </div>
    );
}

export default GrupoCard;