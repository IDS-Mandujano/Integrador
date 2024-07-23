import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function Form() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        
        fetch(`${import.meta.env.VITE_LOCAL_API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include',
        })
        .then(response => {
            const token = response.headers.get('Authorization')
            localStorage.setItem('authToken',token)

            if (response.ok) {
                return response.json()
            } else {
                Swal.fire({
                title: "Error de conexión",
                text: "No se puede conectar a internet. Por favor, verifica tu conexión e intenta nuevamente.",
                icon: "error"
                });
            }
        })
        .then(data => {
            const rol = data.role;
            Swal.fire({
                title: "Inicio de sesión exitoso",
                text: "Has iniciado sesión correctamente.",
                icon: "success"
            });
            if (rol === 1) {
                navigate("/Alumnos")
            } else {
                navigate("/Home");
            }
        })
        .catch(error => {
            console.log("Error durante la solicitud fetch: ", error);
            setError("Error durante el inicio de sesión. Por favor, inténtelo de nuevo.");
        });
    };
    
    return (
        <form className="p-6 rounded-lg w-full max-w-md mx-auto">
            <div className="flex flex-col space-y-4 mb-4">
                <Input 
                    type="text" 
                    name="username" 
                    placeholder="Ingresa tu identificador" 
                    value={formData.username} 
                    onChange={handleInputChange}
                />
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Ingresa tu contraseña" 
                    value={formData.password} 
                    onChange={handleInputChange}
                />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex justify-center">
                <Button type="submit" text="Ingresar" onClick={handleLogin}/>
            </div>
        </form>
    );
}

export default Form;
