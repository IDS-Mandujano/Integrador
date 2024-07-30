import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import File from '../atoms/File';
import EditActividad from '../../../Modals/organisms/EditActividad';
import DeleteActv from "../../../Modals/organisms/DeleteActv";
import AddContent from '../../../Modals/organisms/AddContent';

function TareasContainer(props) {
  const [openDelete, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openContent, setContent] = useState(false)
  const navigate = useNavigate('')

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/Calificar?title=${encodeURIComponent(props.title)}
      &parcial=${encodeURIComponent(props.parcial)}
      &subtitle=${encodeURIComponent(props.subtitle)}
      &description=${encodeURIComponent(props.description)}`);
  };
  

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center mb-6 w-full">
      <div className="flex-1 w-full">
        <div className="text-center mb-4">
          <Text text={`${props.parcial} parcial` || ""} className="font-bold text-2xl mb-2 text-teal-700"/>
          <Text text={props.title} className="font-bold text-xl mb-2 text-gray-800"/>
          <Text text={props.subtitle} className="font-semibold text-lg mb-2 text-gray-600"/>
          <Text text={props.description} className="text-sm text-gray-500"/>
        </div>
        <File path={props.path} name={props.name} />
      </div>
      <div className="flex justify-between w-full mt-4">
        <button onClick={() => setOpenUpdate(true)}><Image className="bg-teal-500 w-10 h-10" src="Icons/edit.png"/></button>
        <button onClick={handleNavigate}><Image src="Icons/assignment_turne.png" className="bg-blue-500 w-10 h-10"/></button>
        <button onClick={()=> setContent(true)}><Image src="Icons/content.png" className="w-10 h-10"/></button>
        <button onClick={() => setOpen(true)}><Image className="bg-red-500 w-10 h-10" src="Icons/delete.png"/></button>
      </div>
      <EditActividad show={openUpdate} handleClose={() => setOpenUpdate(false)} id={props.id} idGrupo={props.IdGrupo}/>
      <AddContent show={openContent} handleClose={() => setContent(false)} idActividad={props.id}/>
      <DeleteActv show={openDelete} handleClose={() => setOpen(false)} id={props.id} item="Actividad"/>
    </div>
  );
}

export default TareasContainer;
