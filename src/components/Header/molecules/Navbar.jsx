import { useState,useContext } from "react";
import Image from "../atoms/Image";
import Sidebar from "./Sidebar";
import UserContext from "../../../context/userContext"

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {user} = useContext(UserContext)

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
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} 
            name={user.nombre} apeP={user.apellido_p} apeM={user.apellido_m}
            userImage="vite.svg"/>
        </>
    );
}

export default Navbar;