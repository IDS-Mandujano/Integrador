import SectionAlumnos from "../molecules/SectionAlumnos";
import SectionTareas from "../molecules/SectionTareas";

function DetailsGroup() {
    return (
        <div className="flex w-11/12 h-screen items-center justify-evenly bg-white p-4">
            <div className="flex justify-center w-2/5 h-5/6 shadow-md rounded border-4 hover:border-teal-600 duration-300">
                <SectionAlumnos />
            </div>
            <div className="flex justify-center w-2/5 h-5/6 shadow-md rounded border-4 hover:border-teal-600 duration-300">
                <SectionTareas />
            </div>
        </div>
    );
}

export default DetailsGroup;
