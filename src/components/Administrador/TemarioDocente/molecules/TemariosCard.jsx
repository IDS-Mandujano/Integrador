import Title from '../atoms/Title';
import Text from '../atoms/Text';
import File from '../atoms/File';
import Button from '../atoms/Button';
import { useState } from 'react';
import DeleteTemario from '../../../Modals/organisms/DeleteTemario';
import UpdateTemario from '../../../Modals/organisms/UpdateTemario';

function TemariosCard(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate,setOpenUpdate] = useState(false)

  const handleOpenDelete = () => {setOpenDelete(true)};
  const handleCloseDelete = () => {setOpenDelete(false)};

  const handleOpenUpdate = () => {setOpenUpdate(true)};
  const handleCloseUpdate = () => {setOpenUpdate(false)};


  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Title text={props.filename} className="text-lg font-semibold" />
      <Text text={`ID del Grupo: ${props.idGrupo}`} className="text-gray-600" />
      <div className="mt-4">
        <File href={props.path} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-2" 
          text="Ver archivo" 
        />
        <Button onClick={handleOpenUpdate} className="bg-yellow-500 text-white hover:bg-yellow-600 mr-2 rounded-sm p-1" 
          text="Editar" 
        />
        <Button onClick={ handleOpenDelete} className="bg-red-500 text-white hover:bg-red-600 rounded-sm p-1" 
          text="Eliminar" 
        />
      </div>
      <DeleteTemario show={openDelete} handleClose={handleCloseDelete} item={props.filename} idTemario={props.id}/>
      <UpdateTemario show={openUpdate} handleClose={handleCloseUpdate} idTemario={props.id}/>
    </div>
  );
}

export default TemariosCard;