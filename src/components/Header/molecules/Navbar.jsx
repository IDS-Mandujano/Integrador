import { Link } from "react-router-dom";
import Image from "../atoms/Image";

function Navbar() {
    return (
        <nav className="flex w-full justify-between">
            <Link to="/Home" className="hover:opacity-75">
                <Image className="w-10 h-10" image="Icons/home.png" />
            </Link>
            <Link to="#" className="hover:opacity-75">
                <Image className="w-10 h-10" image="Icons/group_add.png" />
            </Link>
            <Link to="/Agregar" className="hover:opacity-75">
                <Image className="w-10 h-10" image="Icons/person_add.png" />
            </Link>
            <Link to="#" className="hover:opacity-75">
                <Image className="w-10 h-10" image="Icons/logout.png" />
            </Link>
        </nav>
    );
}

export default Navbar;
