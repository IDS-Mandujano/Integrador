import { useEffect, useState } from "react";
import GrupoCard from "../molecules/GrupoCard";
import SectionHead from "../molecules/SectionHead";
import AddGroup from "../../../Modals/organisms/AddGroup";
import { fetchData } from "../../../../utils/fetch";

function GroupContainer() {
    const token = localStorage.getItem('authToken');
    const url = `${import.meta.env.VITE_LOCAL_API}/grupos`;
    const [grupos, setGrupos] = useState([]);
    const [showAddGroup, setShowAddGroup] = useState(false);

    useEffect(() => {
        const getGrupos = async () => {
            try {
                const data = await fetchData(url, 'GET', token);
                setGrupos(data.data);
            } catch (error) {
                console.log(error);
            }
        }

        getGrupos();
    }, [token]);

    const handleSave = (newGroup) => {
        setGrupos(prevGrupos => [...prevGrupos, newGroup]);
        setShowAddGroup(false);
    };

    return (
        <div className="p-6 bg-gray-100">
            <SectionHead />
            <button onClick={() => setShowAddGroup(true)} className="mt-4 bg-teal-500 text-white py-2 px-4 rounded">Agregar Grupo</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {grupos.map((item, index) => (
                    <GrupoCard key={index} text={item.Asignatura} grado={item.Grado} grupo={item.Grupo} IdGrupo={item.IdGrupo} />
                ))}
            </div>
            {showAddGroup && <AddGroup show={showAddGroup} handleClose={() => setShowAddGroup(false)} handleSave={handleSave} />}
        </div>
    );
}

export default GroupContainer;