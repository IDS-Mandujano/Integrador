import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function Form() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({ username: '', password: '' })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        fetch(`${import.meta.env.VITE_LOCAL_API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials: 'include',
        })
        .then(response => {
            if (response.ok) return response.json();
            else console.log('Error al conectarse al servidor')
        })
        .then(data => {
            const rol = data.role
            if(rol==1){
                console.log("Welcome Studen")
            }else {
                alert(`Bienvenido ${data.username}`)
                navigate("/Home")
            }

        })
        .catch(error => {
            console.log("Error durante la solicitud fetch: ", error)
        })
    }

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
                    placeholder="Password$1" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className="flex justify-center">
                <Button text="Ingresar" onClick={handleLogin}/>
            </div>
        </form>
    )
}

export default Form