import Title from "../Atoms/Title";

function SectionHead() {
    return (
        <div className="flex justify-between w-full h-full">
            <div className="flex flex-col justify-evenly w-[50%]">
                <Title className="font-semibold text-2xl" text="Grupos Inscritos" />
            </div>
        </div>
    );
}

export default SectionHead;
