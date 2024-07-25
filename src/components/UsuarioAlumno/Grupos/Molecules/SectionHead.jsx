import Title from "../Atoms/Title";
import Text from "../Atoms/Text";

function SectionHead() {
    return (
        <div className="flex justify-between w-full h-full">
            <div className="flex flex-col justify-evenly w-[50%]">
                <Title className="font-semibold text-2xl" text="Grupos Inscritos" />
                <Text text="Explora los grupos con un solo click" className="text-gray-600 mb-6" />
            </div>
        </div>
    );
}

export default SectionHead;