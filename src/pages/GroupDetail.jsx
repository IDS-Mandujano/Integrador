import Header from "../components/Header/organisms/Header";
import SectionAlumnos from "../components/Administrador/Alumno/molecules/SectionAlumnos";
import SectionTareas from "../components/Administrador/Alumno/molecules/SectionTareas";

function GroupDetail() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header className="w-full" />
      <div className="flex flex-col items-center justify-center p-4">
        <SectionAlumnos />
        <SectionTareas />
      </div>
    </div>
  );
}

export default GroupDetail;
