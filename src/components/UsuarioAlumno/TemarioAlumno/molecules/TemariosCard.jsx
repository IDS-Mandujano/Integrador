import Title from '../atoms/Title';
import Text from '../atoms/Text';
import File from '../atoms/File';

function TemariosCard({filename, idGrupo, path }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Title text={filename} className="text-lg font-semibold" />
      <Text text={`ID del Grupo: ${idGrupo}`} className="text-gray-600" />
      <File 
        path={path} 
        className="text-blue-500 hover:underline mt-2" 
        text="Ver archivo" 
      />
    </div>
  );
}

export default TemariosCard;