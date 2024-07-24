import Navbar from "../Molecules/Navbar";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
function HeaderAlum() {
    return (
        <header className="bg-teal-900 p-2 w-full">
            <div className="flex items-center justify-around">
                <div className="flex w-6/12 justify-between items-center">
                    <Image className="flex w-1/12 items-center" image="imagen-removebg-preview.png" />
                    <div className="flex w-4/5 items-center">
                    <Image className="w-12 h-12" image="vite.svg" />
                    <Text text={`Matrícula:         ${localStorage.getItem('Usuario')}`} className="text-white font-semibold" />
                    </div>
                </div>
                <div className="flex w-2/5 items-center">
                    <Navbar/>
                </div>
            </div>
        </header>
    );
}

export default HeaderAlum;
