import ModalHeader from "../molecules/ModalHeader";
import ModalFooter from "../molecules/ModalFooter";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const ModalTareas = ({ task, show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-gray-600 opacity-50"
        onClick={handleClose}
      ></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg mx-auto z-10">
        <ModalHeader title="Subir tarea" text="Seleccione un archivo PDF" image="Icons/upload_pdf.jpeg"/>
        <div className="mt-4 space-y-4">
          <Text text={`Tema: ${task.Tema}`} className="text-gray-800 font-semibold text-lg"/>
          <Text text={`Descripción: ${task.Descripcion}`} className="text-gray-600 text-sm"/>
          <Input type="file" placeholder="Selecciona un archivo PDF" className="mt-2 border border-gray-300 rounded-lg p-2 w-full bg-gray-50"/>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <ModalFooter isTemario={false} action1="Agregar" action2="Cancelar"
            action1S="bg-teal-500 text-white hover:bg-teal-600" action2S="bg-red-500 text-white hover:bg-red-600"
            fetch={() => console.log('Agregar clicked')} handleClose={handleClose}/>
        </div>
      </div>
    </div>
  );
};

export default ModalTareas;