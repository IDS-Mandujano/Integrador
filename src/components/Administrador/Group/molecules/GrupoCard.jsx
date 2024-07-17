import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

function GrupoCard() {
    const navigate = useNavigate();

    const handleInspect = (e) => {
        e.preventDefault();
        navigate("/Detalles");
        console.log("Vista de detalles");
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <Image image="vite.svg" className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <Title className="text-xl font-semibold" text="Matematicas" />
                        <Text className="text-gray-600 text-sm">{`3 - D`}</Text>
                    </div>
                </div>
                <div className="mb-4">
                    <Text text={`32 - Miembros`} />
                </div>
                <div className="flex justify-end">
                    <Button onClick={handleInspect} className="bg-teal-800 text-white px-4 py-2 rounded" text="Inspeccionar"/>
                </div>
            </div>
        </div>
    );
}

export default GrupoCard;
