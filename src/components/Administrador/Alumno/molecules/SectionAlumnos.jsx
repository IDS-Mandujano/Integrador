import { useState } from "react";
import Title from "../atoms/Title";
import AlumnoContainer from "./AlumnoContainer";

const initialStudents = [
    { Nombre: 'Juan Pérez', Matricula: '123456', ImageUrl: 'vite.svg' },
    { Nombre: 'Ana Gómez', Matricula: '654321', ImageUrl: 'vite.svg' },
    { Nombre: 'Carlos Ruiz', Matricula: '789012', ImageUrl: 'vite.svg' },
];

function SectionAlumnos() {
    const [character, setCharacter] = useState(initialStudents);

    return (
        <div className="flex flex-col w-full h-full shadow-md p-4 bg-gray-50 rounded-lg">
            <div className="ml-4 mt-4">
                <Title className="text-2xl font-bold text-gray-800" title="Alumnos Inscritos" />
            </div>
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
                {character.map((item, index) => (
                    <AlumnoContainer
                        key={index}
                        name={item.Nombre}
                        matricula={item.Matricula}
                        imageUrl={item.ImageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default SectionAlumnos;
