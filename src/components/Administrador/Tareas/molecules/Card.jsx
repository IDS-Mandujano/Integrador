import Text from '../atoms/Text';

function Card({alumno, status, onFileChange }) {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md mb-4">
      <Text text={alumno.nombre} className="text-lg font-semibold mb-2" />
      <Text text={`Estado: ${status || 'No entregado'}`} className="text-sm mb-2" />
      {status !== 'Entregada' && (
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => onFileChange(e, alumno.id)}
          className="mt-2"
        />
      )}
    </div>
  );
}

export default Card;
