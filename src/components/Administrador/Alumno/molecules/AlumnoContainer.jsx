import { useState } from "react";
import { fetchData } from "../../../../utils/fetch";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import handleStatusCode from "../../../../utils/messages";
import EditModal from "../../../Modals/organisms/EditModal";
import DeleteModal from "../../../Modals/organisms/DeleteModal";

function AlumnoContainer(props) {
  const [isUpdateOpen, setUpdateOpen] = useState(false);
  const [isDeleteOpen, setOpen] = useState(false);
  const token = localStorage.getItem('authToken');
  const url = `${import.meta.env.VITE_LOCAL_API}/alumnos`;

  const handleDelete = async () => {
    try {
      const response = await fetchData(`${url}/`, 'DELETE', token, { Matricula: props.matricula });
      handleStatusCode(response.status);
      if (response.status === 204) {
        props.onAlumnoEliminado(props.matricula);
        setOpen(false);
      }
    } catch (error) {
      handleStatusCode(500);
      setOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center mb-4">
      <Image src={props.imageUrl} className="w-24 h-24 rounded-full mb-4" />
      <div className="flex-1 text-center">
        <Text text={props.name} className="font-bold text-lg" />
        <Text text={`Matrícula: ${props.matricula}`} className="text-sm text-gray-500" />
      </div>
      <div className="flex mt-4 gap-2">
        <Button text="Editar" onClick={() => setUpdateOpen(true)}
        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"/>
        <Button text="Eliminar" onClick={() => setOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"/>
      </div>
      <EditModal isUpdateOpen={isUpdateOpen} handleClose={() => setUpdateOpen(false)} id={props.matricula}/>
      <DeleteModal show={isDeleteOpen} handleClose={() => setOpen(false)} handleDelete={handleDelete} item={props.name}/>
    </div>
  );
}

export default AlumnoContainer;