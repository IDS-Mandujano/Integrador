import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import links from "../../../data/links";
import AddGroup from "../../Modals/organisms/AddGroup";

function Sidebar(props) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate("/");
    };

    const handleAddGroupClick = () => {setShowModal(true)};
    const handleCloseModal = () => {setShowModal(false)};

    return (
        <>
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-teal-800 shadow-lg transform transition-transform rounded-sm 
                    ${props.isOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
                <div className="flex flex-col p-4 text-white">
                    <button onClick={props.toggleSidebar} className="self-end mb-4 hover:bg-red-600 duration-300 rounded-sm">
                        <Image className="w-8 h-8" image="Icons/close.png" />
                    </button>

                    <div className="flex flex-col items-center mb-6 border-b">
                        <Image className="w-24 h-24 rounded-full mr-3" image={props.userImage} />
                        <Text text={`Docente: ${props.name} ${props.apeP} ${props.apeM}`} className="font-semibold text-xlDocente:  mt-4 mb-4"/>
                    </div>

                    {links.map((link, index) => (
                        <div key={index}>
                        {link.text === "Agregar Grupo" ? (
                            <button onClick={handleAddGroupClick} className="flex items-center mb-2 p-2 hover:bg-teal-700 rounded-sm w-full text-left">
                                <Image className="w-6 h-6 mr-2" image={link.icon} />
                                <Text text={link.text} />
                            </button>
                            ) : (
                            <Link to={link.to} className="flex items-center mb-2 p-2 hover:bg-teal-700 rounded-sm">
                                <Image className="w-6 h-6 mr-2" image={link.icon} />
                                <Text text={link.text} />
                            </Link>
                            )}
                        </div>
                    ))}

                    <div className="mt-auto">
                    <button onClick={handleLogout} className="flex items-center mb-2 p-2 hover:bg-teal-700 rounded-sm">
                        <Image className="w-6 h-6 mr-2" image="Icons/logout.png" />
                        <Text text="Cerrar sesión" />
                    </button>
                    </div>
                </div>
            </div>

            {showModal && <AddGroup show={showModal} handleClose={handleCloseModal}/>}
        </>
    );
}

export default Sidebar;