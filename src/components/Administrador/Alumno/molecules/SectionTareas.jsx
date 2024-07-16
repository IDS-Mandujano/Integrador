import { useState,useEffect } from "react";
import Title from "../atoms/Title";
import TareasContainer from "./TareasContainer";
import Button from "../atoms/Button";

function SectionTareas() {
    const [character,setCharacter] = useState([])

    useEffect(() =>{
        fetch(`${import.meta.env.VITE_LOCAL_API}/actividades`,{
            method:'GET',
            headers : {
                'x-access-token':`${import.meta.env.VITE_TOKEN_PRUEBAS}`
            }
        })
        .then(response => {
            if(response.ok){
                return response.json()
            }else{
                throw new Error ("No fue posible comunicarse con el server")
            }
        })
        .then(data => {
            setCharacter(data || [])
        })
        .catch(error =>{
            console.log("Error de la peticion",error)
        })
    },[])

    return (
        <div className="flex flex-col w-full h-full shadow-md p-4">
            <div className="ml-4 mt-4">
                <Title className="text-xl font-bold" title="Actividades" />
            </div>
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
                {character.map((item,index) => 
                <TareasContainer
                key = {index}
                title = {item.Tema}
                description={item.Descripcion}/>)}
                <div className="flex justify-end gap-2 mt-4 mr-4">
                    <Button text="Agregar Tarea" className="bg-teal-600 text-white px-4 py-2 rounded-md" />
                    <Button text="Calificar" className="bg-yellow-500 text-white px-4 py-2 rounded-md" />
                </div>
            </div>
        </div>
    );
}

export default SectionTareas;
