import Header from "../components/Header/organisms/Header";
import DetailsGroup from "../components/Administrador/Alumno/organisms/DetailsGroup"

function GroupDetail() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header className="w-full" />
      <div className="flex flex-col items-center justify-center p-4">
        <DetailsGroup/>
      </div>
    </div>
  );
}

export default GroupDetail;
