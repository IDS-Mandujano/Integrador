import ModalHeader from '../molecules/ModalHeader';
import ModalFooter from '../molecules/ModalFooter';

function DeleteModal({ show, handleClose, handleDelete, item }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-sm mx-auto">
        <ModalHeader title="Confirmar Eliminación" image="Icons/delete.png"
          text={`¿Estás seguro de que deseas eliminar el elemento "${item}"?`}
        />
        <div className="mt-4 flex justify-end space-x-4">
          <ModalFooter handleClose={handleClose} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;