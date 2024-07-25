import Navbar from "../molecules/Navbar";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import UserContext from "../../../context/userContext";
import { useContext } from "react";

function Header() {

    const value = useContext(UserContext)
    console.log(value)

    return (
        <header className="bg-teal-900 p-2 w-full">
            <div className="flex items-center justify-around">
                <div className="flex w-6/12 justify-between items-center">
                    <Image className="w-14 h-14 rounded-full" image="icon.jpeg" />
                    <div className="flex w-4/5 items-center">
                        <Image className="w-12 h-12" image="vite.svg" />
                        <Text text={`${localStorage.getItem('Usuario')}`} className="text-white font-semibold" />
                        <Text />
                    </div>
                </div>
                <div className="flex w-2/5 items-center">
                    <Navbar/>
                </div>
            </div>
        </header>
    );
}

export default Header;