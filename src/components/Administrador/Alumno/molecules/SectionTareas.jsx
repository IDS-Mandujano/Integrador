import Title from "../atoms/Title";
import TareasContainer from "../molecules/TareasContainer";
import Button from "../atoms/Button";

function SectionTareas() {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 mb-8 max-h-96 overflow-y-auto">
      <Title className="text-3xl font-bold text-gray-800 mb-4" title="Actividades" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <TareasContainer title="Matemáticas - Ecuaciones" description="Resolver 10 ecuaciones lineales."/>
      </div>
      <div className="flex justify-end mt-4">
        <Button text="Agregar Tarea" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition duration-300" />
        <Button text="Calificar" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300 ml-2" />
      </div>
    </div>
  );
}

export default SectionTareas;