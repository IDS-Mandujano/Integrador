import SectionAlumnos from "../molecules/SectionAlumnos";
import SectionTareas from "../molecules/SectionTareas";

function DetailsGroup() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col w-full max-w-4xl space-y-8">
                <SectionAlumnos/>
                <SectionTareas/>
            </div>
        </div>
    );
}

export default DetailsGroup;
