import Title from "../atoms/Title";
import Text from "../atoms/Text";

function SectionHead() {
    return (
        <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <Title className="text-4xl leading-tight font-extrabold text-gray-900 sm:text-5xl lg:text-6xl" text="Grupos Disponibles"/>
                    <Text className="mt-4 text-lg text-gray-700" text="Explora los grupos con un solo clic"/>
                </div>
            </div>
        </div>
    );
}

export default SectionHead;
