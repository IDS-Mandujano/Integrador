import Text from '../atoms/Text';
import Button from '../atoms/Button';
import File from '../atoms/File';

function TareasContainer(props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center mb-4">
      <div className="text-center">
        <Text text={props.title} className="font-bold text-lg mb-2" />
        <Text text={props.description} className="text-sm text-gray-500" />
        <File path={props.path} name={props.name} />
      </div>
      <div className="flex mt-4 gap-2">
        <Button text="Editar" onClick={props.onEditar} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 text-sm" />
        <Button text="Eliminar" onClick={props.onEliminar} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm" />
      </div>
    </div>
  );
}

export default TareasContainer;