import { useState,useEffect } from "react";
import GrupoCard from "../molecules/GrupoCard";
import SectionHead from "../molecules/SectionHead";

function GroupContainer() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCAL_API}/grupos/`, {
            method: 'GET',
            headers: {
                'x-access-token': `${import.meta.env.VITE_TOKEN_PRUEBAS}`
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No fue posible establer comunicación con el server');
            }
        })
        .then(data => {
            setCharacters(data || []);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="flex flex-col w-full items-center p-6">
            <div className="w-full mb-6">
                <SectionHead />
            </div>
            <div className="grid md:grid-cols-3 lg:grid-rows-3 gap-6 w-full h-svh">
                {characters.map((item,index) => 
                <GrupoCard key={index} 
                asignatura={item.Asignatura}
                grado={item.Grado}
                grupo={item.Grupo}
                miembros={characters.length}/>)}
            </div>
        </div>
    );
}

export default GroupContainer;
