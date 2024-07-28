import { useState } from "react";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import fields from "../../../../data/formData";
import { fetchData } from '../../../../utils/fetch';
import handleStatusCode from "../../../../utils/messages";

function FormAlumno({ actualizarAlumnos }) {
    const token = localStorage.getItem('authToken');

    const [dataAlumno, setDataAlumno] = useState({
        Matricula: '', Nombre: '', ApellidoP: '', ApellidoM: '', Edad: 0, Calificacion: 0, CURP: '', Contrasena: '',
        Correo: '', Grupo: '', Grado: ''
    });

    const [errors, setErrors] = useState({
        Matricula: '', Nombre: '', ApellidoP: '', ApellidoM: '', Correo: '', Grupo: '', Grado: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataAlumno(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateData = () => {
        const { Matricula, Nombre, ApellidoP, ApellidoM, Correo, Grupo, Grado } = dataAlumno;
        const newErrors = {};

        const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
        const gradoRegex = /^\d+$/;
        const grupoRegex = /^[A-Z]$/;
        const correoRegex = /^[^\s@]+@outlook\.com$/;
        const matriculaRegex = /^.{1,7}$/;

        if (!nameRegex.test(Nombre)) {
            newErrors.Nombre = "Nombre debe empezar con mayúscula y solo contener letras.";
        }

        if (!nameRegex.test(ApellidoP)) {
            newErrors.ApellidoP = "Apellido Paterno debe empezar con mayúscula y solo contener letras.";
        }

        if (!nameRegex.test(ApellidoM)) {
            newErrors.ApellidoM = "Apellido Materno debe empezar con mayúscula y solo contener letras.";
        }

        if (!correoRegex.test(Correo)) {
            newErrors.Correo = "Correo debe ser un correo de Outlook válido.";
        }

        if (!matriculaRegex.test(Matricula)) {
            newErrors.Matricula = "Matrícula debe tener un máximo de 7 caracteres.";
        }

        if (!gradoRegex.test(Grado)) {
            newErrors.Grado = "Grado debe ser un número.";
        }

        if (!grupoRegex.test(Grupo)) {
            newErrors.Grupo = "Grupo debe ser una letra mayúscula.";
        }

        setErrors(newErrors);


        return Object.keys(newErrors).length === 0;
    };

    const handleAgregarAlumno = async (e) => {
        e.preventDefault();
    
        if (!validateData()) {
            return;
        }
    
        const url = `${import.meta.env.VITE_LOCAL_API}/alumnos/`;
        console.log("Datos enviados:", dataAlumno);
    
        try {
            const data = await fetchData(url,'POST', token, dataAlumno);
            console.log("Respuesta del servidor:", data.status, data.data);
            handleStatusCode(data.status)
            actualizarAlumnos();
        } catch (error) {
            console.error('Error durante la solicitud:', error);
        }
    };    

    return (
        <form className="flex flex-wrap items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col mb-4">
                    <Label text={field.label} />
                    <Input type={field.type} placeholder={field.placeholder} name={field.key}
                        value={dataAlumno[field.key] || ''} onChange={handleInputChange} className="p-2 border border-gray-300 rounded-md"
                    />
                    {errors[field.key] && (
                        <span className="text-red-500 text-sm mt-1">{errors[field.key]}</span>
                    )}
                </div>
            ))}
            <div className="mt-4 w-full">
                <Button text="Agregar" className="w-full" onClick={handleAgregarAlumno}/>
            </div>
        </form>
    );
}

export default FormAlumno;
