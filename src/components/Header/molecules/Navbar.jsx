import Image from "../atoms/Image";

function Navbar() {
    return (
        <nav className="flex w-full justify-between">
            <a href="/Home" className="hover:opacity-75"><Image className="w-10 h-10" image="Icons/home.png" /></a>
            <a href="#"  className="hover:opacity-75"><Image className="w-10 h-10" image="Icons/group_add.png"/></a>
            <a href="/Agregar" className="hover:opacity-75"><Image className="w-10 h-10" image="Icons/person_add.png" /></a>
            <a href="#" className="hover:opacity-75"><Image className="w-10 h-10" image="Icons/logout.png" /></a>
        </nav>
    );
}

export default Navbar;
