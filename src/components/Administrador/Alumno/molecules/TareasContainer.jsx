import Text from "../atoms/Text";
import Button from "../atoms/Button";

function TareasContainer({ title, description }) {
    return (
        <div className="flex bg-gray-300 items-center justify-between w-11/12 p-4 rounded-md shadow-md mx-auto">
            <div className="flex flex-col flex-1 mx-4">
                <Text text={title} className="font-bold text-lg" />
                <Text text={description} className="text-sm text-gray-500" />
            </div>
            <div className="flex gap-2">
                <Button text="Editar" className="bg-teal-500 text-white px-4 py-2 rounded-md" />
                <Button text="Eliminar" className="bg-red-500 text-white px-4 py-2 rounded-md" />
            </div>
        </div>
    );
}

export default TareasContainer;
