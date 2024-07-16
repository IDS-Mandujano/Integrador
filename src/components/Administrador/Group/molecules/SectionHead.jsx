import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

function SectionHead() {
    return (
        <div className="flex justify-between w-full h-full">
            <div className="flex flex-col justify-evenly w-[50%]">
                <Title className="font-semibold text-2xl" text="Grupos disponibles" />
                <Text className="text-gray-800" text="Inspecciona los grupos con solo un clic" />
            </div>
            <div className="flex items-center justify-end w-[50%]">
                <Button className="bg-teal-800 w-4/12 h-11 rounded text-white" text="Agregar grupo" />
            </div>
        </div>
    );
}

export default SectionHead;
