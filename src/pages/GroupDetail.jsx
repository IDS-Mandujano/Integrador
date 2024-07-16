import DetailsGroup from "../components/Administrador/Alumno/organisms/DetailsGroup";
import Header from "../components/Header/organisms/Header";

function GroupDetail() {
    return (
        <div className="flex flex-col w-full h-screen">
            <Header className="w-full" />
            <div className="flex w-full h-full items-center justify-center">
                <DetailsGroup />
            </div>
        </div>
    );
}

export default GroupDetail;
