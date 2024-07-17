import { useState } from "react";
import GrupoCard from "../molecules/GrupoCard";
import SectionHead from "../molecules/SectionHead";

const initialGroups = [
    {
        Asignatura: 'Matemáticas',
        Grado: '10',
        Grupo: 'A',
    },
    {
        Asignatura: 'Ciencias',
        Grado: '9',
        Grupo: 'B',
    },
    {
        Asignatura: 'Historia',
        Grado: '8',
        Grupo: 'C',
    },
];

function GroupContainer() {
    const [characters, setCharacters] = useState(initialGroups);

    return (
        <div className="flex flex-col w-full items-center p-6 bg-gray-100">
            <div className="w-full mb-6">
                <SectionHead />
            </div>
            <div className="grid md:grid-cols-3 lg:grid-rows-3 gap-6 w-full h-svh">
                {characters.map((item, index) => (
                    <GrupoCard
                        key={index}
                        asignatura={item.Asignatura}
                        grado={item.Grado}
                        grupo={item.Grupo}
                        miembros={characters.length}
                    />
                ))}
            </div>
        </div>
    );
}

export default GroupContainer;
