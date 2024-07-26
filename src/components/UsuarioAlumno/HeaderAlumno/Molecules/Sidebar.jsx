import { Link } from "react-router-dom";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text"

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-teal-800 shadow-lg transform transition-transform rounded-sm ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex flex-col p-4 text-white">
                <button onClick={toggleSidebar} className="self-end mb-4 hover:bg-red-600 duration-300 rounded-sm"
                > <Image className="w-8 h-8" image="Icons/close.png" /></button>

                <Link to="/Alumno" className="flex items-center mb-2 p-2 hover:bg-teal-800 rounded-sm">
                    <Image className="w-6 h-6 mr-2" image="Icons/home.png" />
                    <Text text="Inicio"/>
                </Link>
                <Link to="/AnotherOption" className="flex items-center mb-2 p-2 hover:bg-teal-800 rounded-sm">
                    <Image className="w-6 h-6 mr-2" image="Icons/person.png" />
                    <Text text="Perfil"/>
                </Link>
                <Link to="/MoreOptions" className="flex items-center mb-2 p-2 hover:bg-teal-800 rounded-sm">
                    <Image className="w-6 h-6 mr-2" image="Icons/logout.png" />
                    <Text text="Salir"/>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;