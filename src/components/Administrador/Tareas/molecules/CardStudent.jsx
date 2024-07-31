import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function CardStudent(props) {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white">
      <Title className="text-teal-800 font-bold text-xl mb-2" text={props.name} />
      <div className="mt-4 space-y-2">
        <Text text={`Matrícula: ${props.matricula}`} className="text-gray-700" />
        <Text text={`Grado: ${props.grado}`} className="text-gray-700" />
        <Text text={`Grupo: ${props.grupo}`} className="text-gray-700" />
        <a className="text-blue-600 hover:text-blue-800 hover:underline"
          href="#">Pdf de la tarea</a>
        <Input type="number" placeholder="0.00"
          className="mt-2 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500"/>
        <Button text="Calificar" className="mt-4 bg-teal-600 text-white hover:bg-teal-700 p-2 w-36 rounded-sm" onClick={() => alert('Calificado')}/>
      </div>
    </div>
  );
}

export default CardStudent;