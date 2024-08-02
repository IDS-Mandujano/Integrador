import Image from "../atoms/Image";

function OptionsMenu({ show, onClose, onEdit, onDelete, IdGrupo }) {

  if (!show) return null;

  return (
    <div className="absolute top-4 right-4 bg-white border rounded shadow-lg">
      <button onClick={onClose} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="size-6 bg-gray-400 rounded-sm" image="Icons/close.png" />
      </button>
      <button onClick={() => onEdit(IdGrupo)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="bg-teal-500 rounded-sm size-6" image="Icons/edit.png" />
      </button>
      <button onClick={() => onDelete(true)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="size-6 rounded-sm bg-red-500" image="Icons/delete.png" />
      </button>
    </div>
  );
}

export default OptionsMenu;