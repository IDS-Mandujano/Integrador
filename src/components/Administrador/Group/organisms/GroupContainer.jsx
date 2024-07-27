import { useEffect, useState} from "react";
import GrupoCard from "../molecules/GrupoCard";
import SectionHead from "../molecules/SectionHead";
import { fetchData } from "../../../../utils/fetch";

function GroupContainer() {
    const token = localStorage.getItem('authToken');
    const url = `${import.meta.env.VITE_LOCAL_API}/grupos`
    const [grupos, setGrupos] = useState([]);

    useEffect(()=>{
    const getGrupos = async ()=>{
        try {
            const data = await fetchData(url,'GET',token)
            setGrupos(data)
        }catch(error) {
            console.log(error)
        }
    }

    getGrupos()
    },[token])

    return (
        <div className="p-6 bg-gray-100">
            <SectionHead />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {grupos.map((item, index) => (
                <GrupoCard key={index} text={item.Asignatura} grado={item.Grado} grupo={item.Grupo} IdGrupo={item.IdGrupo}/>
                ))}
            </div>
        </div>
    );
}

export default GroupContainer;