import { useState,useEffect } from "react";
import Title from "../atoms/Title";
import AlumnoContainer from "./AlumnoContainer";

function SectionAlumnos() {

    const [character,setCharacter] = useState([])

    useEffect(() =>{
        fetch(`${import.meta.env.VITE_LOCAL_API}/alumnos`,{
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
                <Title className="text-xl font-bold" title="Alumnos Inscritos" />
            </div>
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
                {character.map((index,item) => {
                    <AlumnoContainer
                    key = {index}
                    name = {item.Nombre}
                    matricula={item.Matricula}/>
                })}
            </div>
        </div>
    );
}

export default SectionAlumnos;
