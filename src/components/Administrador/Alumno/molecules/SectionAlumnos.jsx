import { useState,useEffect } from "react";
import Title from "../atoms/Title";
import AlumnoContainer from "../molecules/AlumnoContainer";

function SectionAlumnos() {
  const [alumnos,setAlumnos] = useState([])
  const token = localStorage.getItem('authToken')

  useEffect(()=>{

    fetch(`${import.meta.env.VITE_LOCAL_API}/alumnos`,{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `${token}`
      },
      credentials : 'include'
    })
    .then(response => {
      if(response.ok) return response.json()
        else throw new Error ('error al conectarse servidor')
    })
    .then(data => {
      setAlumnos(data)
    })
    .catch(error => {
      console.log('Error en la solicitud al servidor',error)
    })
  },[])

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 mb-8 max-h-96 overflow-y-auto">
      <Title className="text-3xl font-bold text-gray-800 mb-4" title="Alumnos Inscritos" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          alumnos.map((item,index) => (
            <AlumnoContainer key={index} imageUrl="vite.svg" name={item.Nombre} matricula={item.Matricula}/>
          ))
        }
      </div>
    </div>
  );
}

export default SectionAlumnos;
