import { useState, useEffect } from "react";
import { fetchData } from "../../../utils/fetch";
import handleStatusCode from "../../../utils/messages";
import formData from "../../../data/formData";
import ModalHeader from "../molecules/ModalHeader";
import ModalFooter from "../molecules/ModalFooter";
import Input from "../atoms/Input";


function EditModal(props) {
  const initialFormValues = formData.reduce((acc, item) => {
    acc[item.key] = "";
    return acc;
  }, {});

  const [formValues, setFormValues] = useState(initialFormValues);
  const url = `${import.meta.env.VITE_LOCAL_API}/alumnos/`;
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const getAlumno = async () => {
      try {
        const response = await fetchData(`${url}porId`, 'POST', token, { Matricula: props.id });
        setFormValues(prevValues => ({
          ...prevValues,
          ...response.data
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (props.isUpdateOpen) {
      getAlumno();
    }
  }, [props.isUpdateOpen, props.id, url, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchData(url,'PUT', token, formValues);
      if (response.status === 200) {
        handleStatusCode(response.status);
        props.handleClose();
      } else {
        handleStatusCode(response.status);
      }
    } catch (error) {
      console.log('Error en handleSubmit:', error);
      handleStatusCode(500);
    }
  };

  if (!props.isUpdateOpen) return null;

  return (
    <div onClick={() => props.handleClose()} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md h-3/4 overflow-y-auto">
        <ModalHeader image="Icons/person.png" className="bg-teal-600"/>
        <form className="flex flex-col space-y-4">
          {formData.map((item, key) => (
            <Input className="border border-teal-600 hover:border-2 hover:border-teal-700 rounded-sm p-2"
              key={key} type={item.type} placeholder={item.placeholder} name={item.key} value={formValues[item.key] || ""}
              onChange={handleChange} disabled={item.disabled}
            />
          ))}
          <div className="mt-4 flex justify-end space-x-4">
            <ModalFooter isTemario={false} action1="Editar" action2="Cancelar"
              handleClose={props.handleClose} fetch={handleSubmit}
              action1S="bg-teal-500 text-white" action2S="bg-gray-500 text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;