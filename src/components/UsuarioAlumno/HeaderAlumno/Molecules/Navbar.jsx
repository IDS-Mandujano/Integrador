import { useState, useEffect, useContext } from "react";
import Image from "../Atoms/Image";
import Sidebar from "./Sidebar";
import UserContext from "../../../../context/userContext";
import { fetchData } from "../../../../utils/fetch";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user } = useContext(UserContext);
    const [userImage, setUserImage] = useState("vite.svg");
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchUserImage = async () => {
            const url = `${import.meta.env.VITE_LOCAL_API}/imagenesAlumnos/obtener`;
            const body = { matricula: user.usuario };
            try {
                const response = await fetchData(url, 'POST', token, body);
                if (response.status === 200 && response.data.image) {
                    setUserImage(response.data.image.url);
                }
            } catch (error) {
                console.error('Error fetching user image:', error);
            }
        };

        if (user && user.usuario) {
            fetchUserImage();
        }
    }, [user, token]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="flex w-full justify-end text-white">
                <button onClick={toggleSidebar} className="hover:opacity-75">
                    <Image className="w-10 h-10" image="Icons/menu.png" />
                </button>
            </nav>
            <Sidebar 
                isOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar} 
                name={user.nombre} 
                apeP={user.apellido_p} 
                apeM={user.apellido_m}
                userImage={userImage}
                setUserImage={setUserImage}
                user={user} 
            />
        </>
    );
}

export default Navbar;
