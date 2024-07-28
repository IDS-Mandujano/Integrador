import { useState } from "react";
import { fetchData } from "../../../../utils/fetch";
import handleStatusCode from "../../../../utils/messages";
import Image from "../atoms/Image";
import DeleteModal from "../../../Modals/organisms/DeleteModal";

function OptionsMenu(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!props.show) return null;
  
  const url = `${import.meta.env.VITE_LOCAL_API}/grupos`;
  const token = localStorage.getItem('authToken');

  const onDelete = async () => {
    const response = await fetchData(url, 'DELETE', token, { IdGrupo: props.IdGrupo });
    handleStatusCode(response.status);
    setShowDeleteModal(false);
    if (props.onDeleteGroup) props.onDeleteGroup();
  };

  return (
    <div className="absolute top-4 right-4 bg-white border rounded shadow-lg">
      <button onClick={props.onClose} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="size-6 bg-gray-400 rounded-sm" image="Icons/close.png" />
      </button>
      <button onClick={() => props.onEdit(props.IdGrupo)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="bg-teal-500 rounded-sm size-6" image="Icons/edit.png" />
      </button>
      <button onClick={() => setShowDeleteModal(true)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="size-6 rounded-sm bg-red-500" image="Icons/delete.png" />
      </button>
      <DeleteModal show={showDeleteModal} handleClose={() => setShowDeleteModal(false)} handleDelete={onDelete} item={props.asignatura}/>
    </div>
  );
}

export default OptionsMenu;