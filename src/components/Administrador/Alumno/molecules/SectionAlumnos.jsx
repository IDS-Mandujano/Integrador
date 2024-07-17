import Title from "../atoms/Title";
import AlumnoContainer from "../molecules/AlumnoContainer";

function SectionAlumnos() {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 mb-8 max-h-96 overflow-y-auto">
      <Title className="text-3xl font-bold text-gray-800 mb-4" title="Alumnos Inscritos" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AlumnoContainer imageUrl="vite.svg" name="Juan Perez" matricula="233325"/>
      </div>
    </div>
  );
}

export default SectionAlumnos;
