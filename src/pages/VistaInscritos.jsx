import GroupContainer from "../components/UsuarioAlumno/Grupos/Organisms/GroupContainer";
import Header from "../components/Header/organisms/Header";

function VistaInscritos() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header className="w-full" />
            <div className="container mx-auto p-4">
                <GroupContainer />
            </div>
        </div>
    );
}

export default VistaInscritos;