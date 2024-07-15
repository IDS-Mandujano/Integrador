import Title from "../atoms/Title";
import TareasContainer from "./TareasContainer";
import Button from "../atoms/Button";

function SectionTareas() {
    return (
        <div className="flex flex-col w-full h-full shadow-md p-4">
            <div className="ml-4 mt-4">
                <Title className="text-xl font-bold" title="Actividades" />
            </div>
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
                {Array.from({ length: 5 }).map((_, index) => (
                    <TareasContainer 
                        key={index}
                        title={`Tarea ${index + 1}`}
                        description={`Descripción de la tarea ${index + 1}`} 
                    />
                ))}
                <div className="flex justify-end gap-2 mt-4 mr-4">
                    <Button text="Agregar Tarea" className="bg-green-500 text-white px-4 py-2 rounded-md" />
                    <Button text="Calificar" className="bg-yellow-500 text-white px-4 py-2 rounded-md" />
                </div>
            </div>
        </div>
    );
}

export default SectionTareas;
