import Button from "../atoms/Button";

function ModalFooter({ handleDelete, handleClose }) {
  return (
    <div className=" w-full flex justify-center space-x-4">
      <Button className="bg-gray-400 text-white" text="Cancelar" onClick={handleClose}
      />
      <Button className="bg-red-500 text-white" text="Eliminar" onClick={handleDelete}
      />
    </div>
  );
}

export default ModalFooter;