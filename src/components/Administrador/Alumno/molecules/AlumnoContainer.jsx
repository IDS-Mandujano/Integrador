import { useEffect, useState } from "react";
import { fetchData } from "../../../../utils/fetch";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import handleStatusCode from "../../../../utils/messages";
import EditModal from "../../../Modals/organisms/EditModal";
import DeleteModal from "../../../Modals/organisms/DeleteModal";

function AlumnoContainer({ matricula, imageUrl, name, onAlumnoEliminado }) {
  const [alumnoData, setAlumnoData] = useState(null);
  const [isUpdateOpen, setUpdateOpen] = useState(false);
  const [isDeleteOpen, setOpen] = useState(false);
  const token = localStorage.getItem('authToken');
  const url = `${import.meta.env.VITE_LOCAL_API}/alumnos`;

  useEffect(() => {
    if (matricula) {
      fetchData(`${url}/porId`, 'POST', token, { Matricula: matricula })
        .then(data => {
          setAlumnoData(data);
        })
        .catch(error => {
          console.error('Error fetching student data:', error);
          handleStatusCode(500);
        });
    }
  }, [matricula, token, url]);

  const handleDelete = async () => {
    try {
      const response = await fetchData(`${url}/`, 'DELETE', token, { Matricula: matricula });
      handleStatusCode(response.status);
      if (response.status === 204) {
        onAlumnoEliminado(matricula);
        setOpen(false);
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      handleStatusCode(500);
      setOpen(false);
    }
  };

  const handleSave = async (data) => {
    const { Matricula, CURP, Contrasena, ...editableData } = data;
    try {
      const response = await fetchData(`${url}/`,'PUT',token,{ ...editableData, Matricula, CURP, Contrasena });
      console.log('Response PUT:', response.status);
      handleStatusCode(response.status);
      if (response.status === 200) {
        setAlumnoData(prevData => ({ ...prevData, ...editableData }));
        setUpdateOpen(false);
      }
    } catch (error) {
      console.error('Error updating student:', error);
      handleStatusCode(500);
      setUpdateOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center mb-4">
      <Image src={imageUrl} className="w-24 h-24 rounded-full mb-4" />
      <div className="flex-1 text-center">
        <Text text={name} className="font-bold text-lg" />
        <Text text={`Matrícula: ${matricula}`} className="text-sm text-gray-500" />
      </div>
      <div className="flex mt-4 gap-2">
        <Button text="Editar" onClick={() => setUpdateOpen(true)}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"/>
        <Button text="Eliminar" onClick={() => setOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"/>
      </div>
      <EditModal show={isUpdateOpen} handleClose={() => setUpdateOpen(false)} handleSave={handleSave} data={alumnoData}/>
      <DeleteModal show={isDeleteOpen} handleClose={() => setOpen(false)} handleDelete={handleDelete} item={name}/>
    </div>
  )
}

export default AlumnoContainer;