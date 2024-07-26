import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Image from "../atoms/Image";

function TaskDetails({ task }) {
  return (
    <div>
      <Title title={`Tema: ${task.tema}`} />
      <Text className="text-lg mb-2" text="Descripción" />
      <Text className="mb-4" text={task.descripcion} />
      <div className="mb-4">
        <Text className="text-lg" text={`Material: ${task.filename}`} />
        <div className="mt-2 flex justify-center">
          <Image image="Icons/upload_pdf.jpeg" className="h-14 w-14" />
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;