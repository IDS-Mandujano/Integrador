import GroupContainer from "../components/UsuarioAlumno/Grupos/Organisms/GroupContainer";
import HeaderAlum from "../components/UsuarioAlumno/HeaderAlumno/Organisms/HeaderAlum";

function VistaInscritos() {
    return (
        <div className="min-h-screen bg-gray-100">
            <HeaderAlum/>
            <div className="container mx-auto p-4">
                <GroupContainer />
            </div>
        </div>
    );
}

export default VistaInscritos;