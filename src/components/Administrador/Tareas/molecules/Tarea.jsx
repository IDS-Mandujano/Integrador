import { useLocation } from "react-router-dom";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

function Tarea() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const title = queryParams.get('title');
  const parcial = queryParams.get('parcial');
  const subtitle = queryParams.get('subtitle');
  const description = queryParams.get('description');

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6 my-4">
      <div className="text-center mb-6">
        <Title text={`${parcial} parcial`} className="text-2xl font-bold text-teal-700 mb-2" />
        <Text text={`Titulo: ${title}`} className="text-lg font-semibold text-gray-800 mb-1" />
        <Text text={`Subtitulo: ${subtitle}`} className="text-md font-medium text-gray-600 mb-1" />
        <Text text={`Descripcion: ${description}`} className="text-sm text-gray-500" />
      </div>
    </div>
  );
}

export default Tarea;