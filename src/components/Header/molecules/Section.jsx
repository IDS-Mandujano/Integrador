import Image from "../atoms/Image"
import Text from "../atoms/Text"

function Section(){
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
            </div>
        </div>
    )
}

export default Section