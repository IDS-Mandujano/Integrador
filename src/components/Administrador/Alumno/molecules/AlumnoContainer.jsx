import Text from "../atoms/Text";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

function AlumnoContainer({ name, matricula, imageUrl }) {
    return (
        <div className="flex items-center justify-between w-11/12 bg-gray-300 p-4 rounded-md shadow-md mx-auto">
            <Image image={imageUrl} className="w-16 h-16 rounded-full" />
            <div className="flex flex-col items-center flex-1 mx-4">
                <Text text={name} className="font-bold text-lg" />
                <Text text={matricula} className="text-sm text-gray-500" />
            </div>
            <div className="flex gap-2">
                <Button text="Editar" className="bg-teal-500 text-white px-4 py-2 rounded-md" />
                <Button text="Eliminar" className="bg-red-500 text-white px-4 py-2 rounded-md" />
            </div>
        </div>
    );
}

export default AlumnoContainer;
