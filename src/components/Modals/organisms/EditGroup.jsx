import { useState, useEffect } from 'react';
import { fetchData } from '../../../utils/fetch';
import ModalHeader from '../molecules/ModalHeader';
import ModalFooter from '../molecules/ModalFooter';
import inputFields from "../../../data/groupData";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import handleStatusCode from '../../../utils/messages';

function EditGroup({ show, handleClose, id }) {
  const url = `${import.meta.env.VITE_LOCAL_API}/grupos/`;
  const token = localStorage.getItem('authToken');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const data = await fetchData(`${url}/porId`,'POST', token, { IdGrupo: id });
        setFormData(data.data)
      } catch (error) {
        handleStatusCode(500);
      }
    };

    if (id) {
      fetchGroupData();
    }
  }, [id, url, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchData(url,'PUT', token, formData);
      if (response.status === 200) {
        console.log("Respuesta del servidor: ",response.status);
        handleStatusCode(response.status);
        handleClose();
      }
    } catch (error) {
      handleStatusCode(error.status);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md mx-auto">
        <ModalHeader image="Icons/edit.png" className="bg-teal-500"/>
        <form>
          {inputFields.map((item, index) => (
            <div key={index} className="mb-5">
              <Label text={item.label} className="block text-gray-600 mb-1" />
              <Input type={item.type} name={item.name} placeholder={item.label} value={formData[item.name] || ''}
                onChange={handleChange} disabled={item.disabled} required={item.required}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            </div>
          ))}
          <ModalFooter isTemario={false} action1="Editar" action2="Cancelar" fetch={handleSubmit} handleClose={handleClose} 
          action1S="bg-teal-500 text-white" action2S="bg-red-500 text-white"
          />
        </form>
      </div>
    </div>
  );
}

export default EditGroup;