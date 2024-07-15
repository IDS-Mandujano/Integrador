import Title from "../atoms/Title";
import AlumnoContainer from "./AlumnoContainer";

function SectionAlumnos() {
    return (
        <div className="flex flex-col w-full h-full shadow-md p-4">
            <div className="ml-4 mt-4">
                <Title className="text-xl font-bold" title="Alumnos Inscritos" />
            </div>
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
                {Array.from({ length: 12 }).map((_, index) => (
                    <AlumnoContainer 
                        key={index}
                        name={`Estudiante ${index + 1}`}
                        matricula={`MATRICULA-${index + 1}`} 
                    />
                ))}
            </div>
        </div>
    );
}

export default SectionAlumnos;
