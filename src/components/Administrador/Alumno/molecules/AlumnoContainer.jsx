import { useState, useEffect } from "react";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import DeleteModal from "../../../Templates/DeleteModal";
import { fetchData } from "../../../../utils/fetch";
import handleStatusCode from "../../../../utils/messages";
import ModalUpdateAlumno from "../../../Templates/ModalUpdateAlumno";

function AlumnoContainer(props) {
  const url = `${import.meta.env.VITE_LOCAL_API}`;
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [alumnoData, setAlumnoData] = useState(null);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchAlumno = async () => {
      try {
        const data = await fetchData(`${url}/alumnos/porId`, 'POST', token, { Matricula: props.matricula });
        setAlumnoData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (props.matricula) {
      fetchAlumno();
    }
  }, [props.matricula, token, url]);

  const handleDelete = async () => {
    try {
      const response = await fetchData(`${url}/alumnos/`, 'DELETE', token, { Matricula: props.matricula });
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
        <Button
          text="Editar"
          onClick={() => setUpdateOpen(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 text-sm"
        />
        <Button
          text="Eliminar"
          onClick={() => setOpen(true)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm"
        />
      </div>
      {open && (
        <DeleteModal
          open={open}
          onClose={() => setOpen(false)}
          title="Eliminar Alumno"
          text={`¿Estás seguro de eliminar a ${props.name}?`}
          onDelete={handleDelete}
        />
      )}
      {updateOpen && (
        <ModalUpdateAlumno
          open={updateOpen}
          onClose={() => setUpdateOpen(false)}
          title={`${props.name} - ${props.matricula}`}
          data={alumnoData}
        />
      )}
    </div>
  );
}

export default AlumnoContainer;