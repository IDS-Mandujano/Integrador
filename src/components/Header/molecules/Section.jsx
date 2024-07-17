import { useNavigate } from "react-router-dom"
import Button from "../../Login/atoms/Button"
import Image from "../atoms/Image"
import Text from "../atoms/Text"

function Section(){

    
    const navigate = useNavigate()

    const handleAdd = (e) =>{
        e.preventDefault()
        navigate("/Agregar/Alumno")
    }

    return(
        <div className="flex w-[95%] justify-between">
            <div className="flex w-[30%] justify-evenly items-center">
                <Image image="logo.png" className="size-14"/>
                <div className="flex w-3/6 justify-evenly items-center">
                    <Image image="user.png" className="size-9"/>
                    <Text text="Nombre Usuario"/>
                </div>
            </div>
            <div className="flex items-center">
                <Image image="logout.png" className="size-14"/>
                <Button className="bg-teal-900 text-white" onClick={handleAdd} text="Agregar Alumno"/>
            </div>
        </div>
    )
}

export default Section