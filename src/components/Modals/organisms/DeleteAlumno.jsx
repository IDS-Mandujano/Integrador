import { fetchData } from '../../../utils/fetch';
import ModalHeader from '../molecules/ModalHeader';
import ModalFooter from '../molecules/ModalFooter';
import handleStatusCode from '../../../utils/messages';

function DeleteAlumno({ show, handleClose, item, id }) {
  if (!show) return null;

  const url = `${import.meta.env.VITE_LOCAL_API}/alumnos`;
  const token = localStorage.getItem('authToken');

  const onDelete = async () => {
    try {
      const response = await fetchData(url, 'DELETE', token, { Matricula: id });
      handleStatusCode(response.status);
      if (response.status === 200 || response.status === 204) {
        handleClose();
      }
    } catch (error) {
      console.error("Error al eliminar el alumno:", error);
      handleStatusCode(500);
      handleClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-sm mx-auto">
        <ModalHeader 
          title="Confirmar Eliminación" 
          image="Icons/delete.png" 
          className="bg-red-500"
          text={`¿Estás seguro de que deseas eliminar el elemento ${item}?`}
        />
        <div className="mt-4 flex justify-end space-x-4">
          <ModalFooter 
            isTemario={false} 
            action1="Eliminar" 
            action2="Cancelar" 
            handleClose={handleClose} 
            fetch={onDelete}
            action1S="bg-red-500 text-white" 
            action2S="bg-gray-500 text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default DeleteAlumno;
