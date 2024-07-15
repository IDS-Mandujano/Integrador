import GrupoCard from "../molecules/GrupoCard";
import SectionHead from "../molecules/SectionHead";

function GroupContainer() {
    return (
        <div className="flex flex-col w-full items-center p-6">
            <div className="w-full mb-6">
                <SectionHead />
            </div>
            <div className="grid md:grid-cols-3 lg:grid-rows-3 gap-6 w-full h-svh">
                <GrupoCard />
            </div>
        </div>
    );
}

export default GroupContainer;
