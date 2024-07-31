import Button from "../atoms/Button";
import File from "../atoms/File";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

function CardContent(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <Title text={props.title} className="text-xl font-bold mb-2" />
      <Text text={props.description} className="text-gray-600 mb-4" />
      <File path={props.filePath} filename={props.fileName} className="text-blue-500 underline mb-4 block" />
      <div className="flex justify-end gap-4 mt-4">
        <Button 
          text="Editar"
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300"
        />
        <Button
          text="Eliminar"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300"
        />
      </div>
    </div>
  );
}

export default CardContent;