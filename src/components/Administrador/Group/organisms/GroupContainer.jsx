import GrupoCard from "../molecules/GrupoCard";
import SectionHead from "../molecules/SectionHead";

function GroupContainer() {
    return (
        <div className="p-6 bg-gray-100">
            <SectionHead />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                <GrupoCard/>
                <GrupoCard/>
            </div>
        </div>
    );
}

export default GroupContainer;