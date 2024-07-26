import { useEffect, useState,useContext } from "react";
import GrupoCard from "../Molecules/GrupoCard";
import SectionHead from "../Molecules/SectionHead";
import { fetchData } from "../../../../utils/fetch";
import UserContext from "../../../../context/userContext";

function GroupContainer() {
    const token = localStorage.getItem('authToken');
    const url = `${import.meta.env.VITE_LOCAL_API}/grupos/grado-grupo`;
    const [grupos, setGrupos] = useState([]);

    const {user} = useContext(UserContext)

    useEffect(() => {
        const getGrupos = async () => {
            try {
                const data = await fetchData(url,'POST', token,{Grado : user.grado, Grupo : user.grupo});
                setGrupos(data);
            } catch (error) {
                console.log(error);
            }
        };

        getGrupos();
    }, [token]);

    return (
        <div className="p-6 bg-gray-100">
            <SectionHead />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {grupos.map((item, index) => (
                    <GrupoCard key={index} asignatura={item.Asignatura} grado={item.Grado} grupo={item.Grupo} miembros={grupos.length}/>
                ))}
            </div>
        </div>
    );
}

export default GroupContainer;