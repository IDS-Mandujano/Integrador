import { Link } from "react-router-dom";
import Image from "../Atoms/Image";

function Navbar() {
    return (
        <nav className="flex w-full justify-between">
            <Link to="/Alumnos" className="hover:opacity-75">
                <Image className="w-10 h-10" image="Icons/home.png" />
            </Link>
           
        </nav>
    );
}

export default Navbar;
