import { useState } from "react";
import Swal from "sweetalert2";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import DeleteModal from "../../../Templates/DeleteModal";
import TemplateModal from "../../../Modal/organisms/TemplateModal";

function AlumnoContainer(props) {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('authToken');

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_LOCAL_API}/alumnos/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      credentials: 'include',
      body: JSON.stringify({ "Matricula": props.matricula })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.status === 204 ? null : response.json();
    })
    .then(() => {
      Swal.fire({
        title: 'Eliminación exitosa',
        text: 'El alumno ha sido eliminado correctamente.',
        icon: 'success'
      });
      props.onAlumnoEliminado(props.matricula);
      setOpen(false);
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      setOpen(false);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center mb-4">
      <Image src={props.imageUrl} className="w-24 h-24 rounded-full mb-4" />
      <div className="flex-1 text-center">
        <Text text={props.name} className="font-bold text-lg" />
        <Text text={`Matrícula: ${props.matricula}`} className="text-sm text-gray-500" />
      </div>
      <div className="flex mt-4 gap-2">
        <Button text="Editar" onClick={props.onEditar} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 text-sm" />
        <Button text="Eliminar" onClick={() => setOpen(true)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm" />
        <DeleteModal open={open} onClose={() => setOpen(false)}>
          <TemplateModal 
            image="Icons/delete.png" title="Confirmar acción" text={`${props.name}?`} 
            className="mx-auto my-4 w-48" onClose={()=> setOpen(false)} onDelete={handleDelete}
          />
        </DeleteModal>
      </div>
    </div>
  );
}

export default AlumnoContainer;
