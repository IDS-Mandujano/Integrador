import { fetchData } from "../../../../utils/fetch";
import handleStatusCode from "../../../../utils/messages"
import Image from "../atoms/Image"

function Menu({ show, onClose, IdGrupo}) {
  if (!show) return null;
  const url = `${import.meta.env_VITE_LOCAL_API}/grupos`
  const token = localStorage.getItem('authToken')

  console.log(IdGrupo)

  const onDelete = (e)=>{
    e.preventDefault()

    const response = fetchData(url,'DELETE',token,{IdGrupo : IdGrupo})
    handleStatusCode(response.status)  
  }

  return (
    <div className="absolute top-4 right-4 bg-white border rounded shadow-lg">
      <button onClick={onClose} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="size-6 bg-gray-600 rounded-sm" image="Icons/close.png"/>
      </button>
      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="bg-teal-500 rounded-sm size-6" image="Icons/edit.png"/>
      </button>
      <button onClick={onDelete} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <Image className="size-6 rounded-sm bg-red-500" image="Icons/delete.png"/>
      </button>
    </div>
  );
}

export default Menu;
