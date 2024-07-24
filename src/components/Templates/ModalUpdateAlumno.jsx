import { useState, useEffect } from "react";
import Text from "../Modal/atoms/Text";
import Input from "../Modal/atoms/Input";
import Button from "../Modal/atoms/Button";
import Label from "../Modal/atoms/Label";
import fields from "../../data/formData";
import { fetchData } from "../../utils/fetch";

function ModalUpdateAlumno({ onClose, data, title }) {
    const [alumnoData, setAlumnoData] = useState(data);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        setAlumnoData(data);
    }, [data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAlumnoData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const url = `${import.meta.env.VITE_LOCAL_API}/alumnos`;
        console.log("Datos enviados:", alumnoData);

        try {
            const response = await fetchData(url, 'PUT', token, alumnoData);
            console.log("Respuesta del servidor:", response);
            if (response.status === 200) {
                onClose();
            }
        } catch (error) {
            console.error('Error durante la solicitud:', error);
        }
    };

    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/30" : "invisible"}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl shadow-lg p-8 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
                style={{ maxWidth: '600px', width: '100%', margin: '0 20px' }}
            >
                <Button
                    onClick={onClose}
                    text="X"
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                />
                <Text text={`Actualizar datos de ${title}`} className="text-xl mb-4" />
                <form className="flex flex-col space-y-4">
                    {fields.map((field, index) => (
                        <div key={index} className="flex flex-col mb-4">
                            <Label text={field.label} />
                            <Input type={field.type} placeholder={field.placeholder}
                            name={field.key} value={alumnoData[field.key] || ''} onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded-md" disabled={field.key === 'matricula'}
                            />
                        </div>
                    ))}
                    <div className="mt-4">
                        <Button text="Guardar" className="w-full" type="submit" onClick={handleUpdate}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalUpdateAlumno;