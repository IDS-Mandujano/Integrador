import { useState, useEffect } from "react";
import { fetchData } from '../../../../utils/fetch';
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import FormAlumno from "../molecules/FormAlumno";
import AlumnosCard from "../molecules/AlumnosCard";
import handleStatusCode from "../../../../utils/messages";

function AddSection() {
    const [alumnos, setAlumnos] = useState([]);
    const token = localStorage.getItem('authToken');

    const actualizarAlumnos = async () => {
        try {
            const response = await fetchData(`${import.meta.env.VITE_LOCAL_API}/alumnos`, 'GET', token);
            console.log('API Response:', response);
            if (response.status === 200) {
                setAlumnos(response.data);
            } else {
                handleStatusCode(response.status)
            }
        } catch (error) {
            handleStatusCode(500)
        }
    };

    useEffect(() => {
        actualizarAlumnos();
    }, [token]);

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6 text-center">
                <Title text="Agregar Alumno" />
                <Text text="Llena los siguientes campos para agregar un nuevo alumno." />
            </div>
            <FormAlumno actualizarAlumnos={actualizarAlumnos} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {alumnos.length > 0 ? (
                    alumnos.map((item, index) => (
                        <AlumnosCard key={index} matricula={item.Matricula} grado={item.Grado} grupo={item.Grupo} />
                    ))
                ) : (
                    <Text text="No hay alumnos disponibles." />
                )}
            </div>
        </div>
    );
}

export default AddSection;
