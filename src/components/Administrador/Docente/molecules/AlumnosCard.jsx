import Title from "../atoms/Title";
import Text from "../atoms/Text";

function AlumnosCard({props}) {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <Title text={props.nombre} />
            <div className="mt-2">
                <Text text={`Matrícula: ${props.matricula}`} />
                <Text text={`Grado: ${props.grado}`} />
                <Text text={`Grupo: ${props.grupo}`} />
            </div>
        </div>
    );
}

export default AlumnosCard;
