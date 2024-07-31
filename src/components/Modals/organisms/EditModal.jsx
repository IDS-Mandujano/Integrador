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
  const [errors, setErrors] = useState({});
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

  const validateInput = () => {
    const { Matricula, Nombre, ApellidoP, ApellidoM, Correo, Grupo, Grado } = formValues;
    const newErrors = {};

    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    const gradoRegex = /^\d$/;
    const grupoRegex = /^[A-Z]$/;
    const correoRegex = /^[^\s@]+@outlook\.com$/;
    const matriculaRegex = /^.{1,7}$/;

    if (!nameRegex.test(Nombre)) {
      newErrors.Nombre = "Nombre debe empezar con mayúscula y solo contener letras.";
    }

    if (!nameRegex.test(ApellidoP)) {
      newErrors.ApellidoP = "Apellido Paterno debe empezar con mayúscula y solo contener letras.";
    }

    if (!nameRegex.test(ApellidoM)) {
      newErrors.ApellidoM = "Apellido Materno debe empezar con mayúscula y solo contener letras.";
    }

    if (!correoRegex.test(Correo)) {
      newErrors.Correo = "Correo debe ser un correo de Outlook válido.";
    }

    if (!matriculaRegex.test(Matricula)) {
      newErrors.Matricula = "Matrícula debe tener un máximo de 7 caracteres.";
    }

    if (!gradoRegex.test(Grado)) {
      newErrors.Grado = "Grado debe ser un solo número.";
    }

    if (!grupoRegex.test(Grupo)) {
      newErrors.Grupo = "Grupo debe ser una letra mayúscula.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    try {
      const response = await fetchData(url, 'PUT', token, formValues);
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
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md h-3/4 overflow-y-auto flex flex-col items-center">
        <ModalHeader image="Icons/person.png" className="bg-teal-600"/>
        <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
          {formData.map((item, key) => (
            <div key={key} className="flex flex-col items-center w-full">
              <Input className="border border-teal-600 hover:border-2 hover:border-teal-700 rounded-sm p-2 w-full"
                type={item.type} placeholder={item.placeholder} name={item.key} value={formValues[item.key] || ""}
                onChange={handleChange} disabled={item.disabled}
              />
              {errors[item.key] && <span className="text-red-500">{errors[item.key]}</span>}
            </div>
          ))}
          <div className="mt-4 flex justify-end space-x-4 w-full">
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
