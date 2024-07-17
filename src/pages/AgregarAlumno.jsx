import AddSection from "../components/Administrador/Docente/organisms/AddSection";
import Header from "../components/Header/organisms/Header"

function AgregarAlumno() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="flex items-center justify-center py-8">
                <AddSection />
            </div>
        </div>
    );
}

export default AgregarAlumno;
