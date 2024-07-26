import { useState } from "react";
import Image from "../Atoms/Image";
import Sidebar from "./Sidebar";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
}

export default Navbar;