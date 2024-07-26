import ModalHeader from "../molecules/ModalHeader";
import ModalFooter from "../molecules/ModalFooter";
import Input from "../atoms/Input";

function AddTemario({ show, handleClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 max-w-lg">
        <ModalHeader title="Tarea" text="Seleccione el método" image="Icons/upload_pdf.jpeg" className="bg-red-600" />
        <div className="p-4 flex flex-col items-center justify-center">
        <Input type="text" placeholder="Tema" className="mb-4 border border-teal-600 rounded-sm" />
        <Input type="text" placeholder="Descripcion" className="mb-4 border border-teal-600 rounded-sm" />
        <Input type="file" placeholder="Agregar archivo .PDF" className="mb-4" />
        </div>
        <ModalFooter
          isTemario={true}
          action1="Subir PDF"
          action2="Cancelar"
          handleClose={handleClose}
          action1S="bg-teal-500 text-white"
          action2S="bg-gray-500 text-white"
          action3="Generar PDF"
        />
      </div>
    </div>
  );
}

export default AddTemario;
