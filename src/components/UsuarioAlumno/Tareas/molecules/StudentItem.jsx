import Avatar from '../atoms/Avatar';
import Label from '../atoms/Label';

function StudentItem({ student }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-2">
      <Avatar />
      <div className="ml-4">
        <Label text={`Matrícula: ${student.matricula}`} className="font-medium" />
        <Label text={`Nombre del alumno: ${student.name}`} className="text-gray-600" />
      </div>
    </div>
  );
}

export default StudentItem