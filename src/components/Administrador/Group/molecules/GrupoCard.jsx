import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import OptionsMenu from "./Menu";
import EditGroupModal from "../../../Modals/organisms/EditGroup";
import DeleteModal from "../../../Modals/organisms/DeleteModal";

function GrupoCard(props) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleInspect = (e) => {
    e.preventDefault();
    sessionStorage.setItem("Grado", props.grado);
    sessionStorage.setItem("Grupo", props.grupo);
    sessionStorage.setItem("IdGrupo", props.IdGrupo);
    navigate("/Detalles");
  };

  const handleTemario = (e) => {
    e.preventDefault();
    navigate("/Temarios");
    sessionStorage.setItem("IdGrupoForTemario", props.IdGrupo);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <button onClick={() => setShowOptions(!showOptions)} className="absolute top-4 right-12 text-gray-500 hover:text-gray-700">
        <Image image="Icons/menu.png" className="w-6 h-6 bg-teal-800 rounded-sm" />
      </button>
      <OptionsMenu show={showOptions} onClose={() => setShowOptions(false)}
        onEdit={() => setShowEditModal(true)} onDelete={() => setShowDeleteModal(true)}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Title className="text-xl font-semibold" text={props.text} />
            <Text className="mt-4" text={`${props.grado} - ${props.grupo}`} />
          </div>
        </div>
        <div className="flex items-center h-1/4">
          <Image image="Icons/group.png" className="size-8 mr-4 bg-teal-500 rounded-sm" />
          <Text text={`Miembros: 32`} />
        </div>
        <div className="flex justify-end mt-2">
          <Button onClick={handleInspect} className="bg-teal-800 text-white px-4 py-2 rounded" text="Inspeccionar"/>
          <Button onClick={handleTemario} className="bg-blue-500 text-white px-4 py-2 rounded ml-4" text="Temario"/>
        </div>
      </div>
      <EditGroupModal show={showEditModal} handleClose={() => setShowEditModal(false)} id={props.IdGrupo}/>
      <DeleteModal show={showDeleteModal} handleClose={() => setShowDeleteModal(false)} item={props.text} id={props.IdGrupo}/>
    </div>
  );
}

export default GrupoCard;
