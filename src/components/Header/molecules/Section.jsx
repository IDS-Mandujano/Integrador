import { useNavigate } from "react-router-dom";
import Button from "../../Login/atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

function Section({ user }) {
    const navigate = useNavigate();

    const handleAddAlumno = (e) => {
        e.preventDefault();
        navigate("/Agregar");
    };

    return (
        <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center space-x-4">
                <Image image="/logo.png" className="h-14" />
                <div className="flex items-center space-x-2">
                    {user && (
                        <div className="flex items-center space-x-2">
                            <Image image="/user.png" className="h-9 rounded-full" />
                            <Text text={user.name} />
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Button className="bg-teal-900 text-white px-4 py-2 rounded" onClick={handleAddAlumno} text="Agregar Alumno"
                />
                <Button className="bg-teal-900 text-white px-4 py-2 rounded" text="Agregar Grupo"/>
                <Image image="/logout.png" className="h-14" />
            </div>
        </div>
    );
}

export default Section;