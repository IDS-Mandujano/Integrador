import { useEffect, useState } from "react";
import GrupoCard from "../molecules/GrupoCard";
import SectionHead from "../molecules/SectionHead";

function GroupContainer() {
    const token = localStorage.getItem('authToken');
    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCAL_API}/grupos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            'credentials': 'include'
        })
        .then(response => {
            if (response.ok) return response.json();
            else throw new Error('Error al conectarse al servidor');
        })
        .then(data => {
            setGrupos(data);
        })
        .catch(error => {
            console.log("Error durante la solicitud fetch: ", error);
        });
    }, []);

    return (
        <div className="p-6 bg-gray-100">
            <SectionHead />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {grupos.map((item, index) => (
                    <GrupoCard key={index} text={item.Asignatura} grado={item.Grado} grupo={item.Grupo}/>
                ))}
            </div>
        </div>
    );
}

export default GroupContainer;
