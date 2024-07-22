import { useState } from "react";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import fields from "../../../../data/formData";
import { fetchData } from '../../../../utils/fetch';

function FormAlumno({ actualizarAlumnos }) {
    const token = localStorage.getItem('authToken');

    const [dataAlumno, setDataAlumno] = useState({
        Matricula: '', Nombre: '', ApellidoP: '', ApellidoM: '', Edad: 0, Calificacion: 0, CURP: '', Contrasena: '',
        Correo: '', Grupo: '', Grado: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataAlumno(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAgregarAlumno = async (e) => {
        e.preventDefault();

        const url = `${import.meta.env.VITE_LOCAL_API}/alumnos`;
        console.log("Datos enviados:", dataAlumno);

        try {
            const data = await fetchData(url, 'POST', token, dataAlumno);
            console.log("Respuesta del servidor:", data);
            actualizarAlumnos();
        } catch (error) {
            console.error('Error durante la solicitud:', error);
        }
    };

    return (
        <form onSubmit={handleAgregarAlumno} className="flex flex-wrap items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col mb-4">
                    <Label text={field.label} />
                    <Input type={field.type} placeholder={field.placeholder} name={field.key}
                        value={dataAlumno[field.key] || ''} onChange={handleInputChange} className="p-2 border border-gray-300 rounded-md"
                    />
                </div>
            ))}
            <div className="mt-4 w-full">
                <Button text="Agregar" className="w-full" />
            </div>
        </form>
    );
}

export default FormAlumno;