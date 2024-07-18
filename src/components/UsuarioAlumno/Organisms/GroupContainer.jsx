import { useState, useEffect } from "react";
import GrupoCard from "../Molecules/GrupoCard";
import SectionHead from "../Molecules/SectionHead";

function GroupContainer() {
    const [groups, setGroups] = useState([]);
    const token = sessionStorage.getItem('authToken')

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/grupos`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            },
            credentials:'include'
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No fue posible establecer comunicación con el servidor');
            }
        })
        .then(data => {
            setGroups(data || []);
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
                {groups.map((item, index) => 
                <GrupoCard key={index} 
                asignatura={item.Asignatura}
                grado={item.Grado}
                grupo={item.Grupo} />)}
            </div>
        </div>
    );
}

export default GroupContainer;
