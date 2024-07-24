import { useState, useContext } from "react";
import Swal from "sweetalert2";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import UserContext from "../../../context/userContext";
import { useNavigate } from "react-router-dom";

function Form() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

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
            if (response.ok) {
                const token = response.headers.get('Authorization');
                localStorage.setItem('authToken', token);
                return response.json();
            } else {
                throw new Error("Error de conexión");
            }
        })
        .then(data => {
            localStorage.setItem('Usuario',data.username)
            setUser({ usuario: data.username, grado: data.grado, grupo: data.grupo, role: data.role });
            Swal.fire({
                title: "Inicio de sesión exitoso",
                text: "Has iniciado sesión correctamente.",
                icon: "success"
            }).then(() => {
                navigate('/Home');
            });
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
                <Button type="submit" text="Ingresar" onClick={handleLogin} />
            </div>
        </form>
    );
}

export default Form;
