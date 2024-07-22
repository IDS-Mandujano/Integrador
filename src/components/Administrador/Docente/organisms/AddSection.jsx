import { useState, useEffect } from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import FormAlumno from "../molecules/FormAlumno";
import AlumnosCard from "../molecules/AlumnosCard";

function AddSection() {
    const [alumnos, setAlumnos] = useState([]);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCAL_API}/alumnos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            credentials: 'include'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setAlumnos(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [token]);

    const handleAlumnoAdded = (newAlumno) => {
        setAlumnos((prevAlumnos) => [...prevAlumnos, newAlumno]);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6 text-center">
                <Title text="Agregar Alumno" />
                <Text text="Llena los siguientes campos para agregar un nuevo alumno." />
            </div>
            <FormAlumno onAlumnoAdded={handleAlumnoAdded} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {alumnos.length > 0 && alumnos.map((item, index) => (
                    <AlumnosCard key={index} matricula={item.Matricula} grado={item.Grado} grupo={item.Grupo} />
                ))}
            </div>
        </div>
    );
}

export default AddSection;