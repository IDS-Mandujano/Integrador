import { useState } from "react";
import Title from "../atoms/Title";
import TareasContainer from "./TareasContainer";
import Button from "../atoms/Button";

const initialTasks = [
    { Tema: 'Matemáticas - Ecuaciones', Descripcion: 'Resolver 10 ecuaciones lineales.' },
    { Tema: 'Ciencias - Fotosíntesis', Descripcion: 'Explicar el proceso de fotosíntesis en plantas.' },
    { Tema: 'Historia - Revolución Francesa', Descripcion: 'Escribir un ensayo sobre las causas de la Revolución Francesa.' },
];

function SectionTareas() {
    const [character, setCharacter] = useState(initialTasks);

    return (
        <div className="flex flex-col w-full h-full shadow-md p-4 bg-gray-50 rounded-lg">
            <div className="ml-4 mt-4">
                <Title className="text-2xl font-bold text-gray-800" title="Actividades" />
            </div>
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
                {character.map((item, index) => (
                    <TareasContainer
                        key={index}
                        title={item.Tema}
                        description={item.Descripcion}
                    />
                ))}
                <div className="flex justify-end gap-2 mt-4 mr-4">
                    <Button text="Agregar Tarea" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition duration-300" />
                    <Button text="Calificar" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300" />
                </div>
            </div>
        </div>
    );
}

export default SectionTareas;
