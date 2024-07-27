import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import { useState,useEffect } from 'react';

const inputFields = [
  { label: "Asignatura", name: "Asignatura", type: "text", required: true },
  { label: "Grado", name: "Grado", type: "text", disabled: true },
  { label: "Grupo", name: "Grupo", type: "text", disabled: true },
  { label: "IdGrupo", name: "IdGrupo", type: "text", disabled: true },
];

function EditGroup({ show, handleClose, handleSave, data }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md mx-auto overflow-y-auto h-[80vh]">
        <Title title="Editar Grupo" />
        <form onSubmit={handleSubmit}>
          {renderInputs()}
          <div className="mt-4 flex justify-end space-x-4">
            <Button onClick={handleSubmit} text="Guardar" className="bg-teal-500 text-white hover:bg-teal-600"/>
            <Button onClick={handleClose} text="Cancelar" className="bg-red-500 text-white hover:bg-red-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditGroup;