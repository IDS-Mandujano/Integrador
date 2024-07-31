import { Link } from "react-router-dom";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { fetchData } from "../../../../utils/fetch";
import { useState, useEffect } from "react";

function Sidebar(props) {
    const { userImage, setUserImage, user } = props;
    const token = localStorage.getItem('authToken');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('imagen', selectedFile);
        formData.append('matricula', user.usuario);

        try {
            const response = await fetch(`${import.meta.env.VITE_LOCAL_API}/imagenesAlumnos`, {
                method: 'POST',
                headers: {
                    'Authorization': token,
                },
                body: formData
            });

            const data = await response.json();
            if (response.ok) {
                const timestamp = new Date().getTime();
                setUserImage(`${data.file.path}?timestamp=${timestamp}`);
                setSelectedFile(null); // Clear the selected file
            } else {
                console.error('Error uploading image:', data.message);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetchData(`${import.meta.env.VITE_LOCAL_API}/imagenesAlumnos`, 'DELETE', token, { matricula: user.usuario });
            if (response.status === 200) {
                setUserImage("vite.svg");
            } else {
                console.error('Error deleting image:', response.data.message);
            }
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    useEffect(() => {
        // This effect runs when userImage changes to force a re-render
    }, [userImage]);

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-teal-800 shadow-lg transform transition-transform rounded-sm ${props.isOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
            <div className="flex flex-col p-4 text-white">
                <button onClick={props.toggleSidebar} className="self-end mb-4 hover:bg-red-600 duration-300 rounded-sm">
                    <Image className="w-8 h-8" image="Icons/close.png" />
                </button>

                <div className="flex flex-col items-center mb-6 border-b">
                    <img src={userImage} alt="User" className="w-24 h-24 rounded-full mr-3 object-cover" />
                    <Text text={`Alumno: ${props.name} ${props.apeP} ${props.apeM}`} className="font-semibold text-xl mt-4 mb-4" />
                </div>

                {userImage === "vite.svg" ? (
                    <>
                        <input type="file" onChange={handleFileChange} className="mb-2"/>
                        <button onClick={handleUpload} className="mb-2 p-2 bg-blue-600 hover:bg-blue-800 rounded-sm">Subir Imagen</button>
                    </>
                ) : (
                    <button onClick={handleDelete} className="mb-2 p-2 bg-red-600 hover:bg-red-800 rounded-sm">Eliminar Imagen</button>
                )}

                <Link to="/Alumno" className="flex items-center mb-2 p-2 hover:bg-teal-800 rounded-sm">
                    <Image className="w-6 h-6 mr-2" image="Icons/home.png" /><Text text="Inicio" />
                </Link>
                <Link to="#" className="flex items-center mb-2 p-2 hover:bg-teal-800 rounded-sm">
                    <Image className="w-6 h-6 mr-2" image="Icons/person.png" /><Text text="Perfil" />
                </Link>
                <Link to="/" className="flex items-center mb-2 p-2 hover:bg-teal-800 rounded-sm">
                    <Image className="w-6 h-6 mr-2" image="Icons/logout.png" /><Text text="Salir" />
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
