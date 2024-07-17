import Title from "../atoms/Title";
import Text from "../atoms/Text";
import FormAlumno from "../molecules/FormAlumno";

function AddSection() {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6 text-center">
                <Title text="Agregar Alumno" />
                <Text text="Llena los siguientes campos para agregar un nuevo alumno." />
            </div>
            <FormAlumno />
        </div>
    );
}

export default AddSection;
