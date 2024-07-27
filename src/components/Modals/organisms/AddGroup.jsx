import { useState } from "react";
import handleStatusCode from "../../../utils/messages";
import { fetchData } from "../../../utils/fetch";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import ModalFooter from "../molecules/ModalFooter";
import ModalHeader from "../molecules/ModalHeader";

function AddGroup({ show, handleClose, handleSave }) {

  const token = localStorage.getItem('authToken')
  const [formData, setFormData] = useState({Asignatura: "",Grado: "", Grupo: ""});
  const handleChange = (e) => {const { name, value } = e.target; setFormData(prevData => ({ ...prevData, [name]: value }))}
  const handleSubmit = (e) => {e.preventDefault(); handleSave(formData);}
  if (!show) return null;

  const inputStyle = "border border-teal-500 w-full px-3 py-2 my-2 rounded";
  const buttonStyle = "px-4 py-2 rounded text-white font-semibold";

  const handleAddGroup = (e) => {
    e.preventDefault()
    const response = fetchData(`${import.meta.env.VITE_LOCAL_API}/grupos`,'POST',token,formData)
      console.log("Status respuesta add: ",)
      handleStatusCode(response.status)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-25" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-lg mx-auto">
        <ModalHeader className={"bg-teal-500"} image="Icons/group.png" title="Agregar Grupo" />
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input type="text" name="Asignatura" className={inputStyle} value={formData.Asignatura}
            onChange={handleChange} placeholder="Asignatura" required/>
          <Input type="text" name="Grado" className={inputStyle} value={formData.Grado}
            onChange={handleChange} placeholder="Grado" required/>
          <Input type="text" name="Grupo" className={inputStyle} value={formData.Grupo}
            onChange={handleChange} placeholder="Grupo" required/>
          <div className="flex justify-end space-x-4 mt-4">
            <Button type="submit" onClick={handleAddGroup} className={`${buttonStyle} bg-teal-600 hover:bg-teal-700`} text="Agregar"/>
            <Button type="button" onClick={handleClose} className={`${buttonStyle} bg-red-500 hover:bg-red-600`} text="Cancelar"/>
          </div>
        </form>
        <ModalFooter />
      </div>
    </div>
  );
}

export default AddGroup;