//import ContainerForm from "../components/Login/organisms/ContainerForm";
import DeleteModal from "../components/Templates/DeleteModal";
import { useState } from "react";

function Login(){
    const [open,setOpen] = useState(false)

    return(
        // <div className="flex w-full h-screen justify-center items-center">
        //     <ContainerForm/>
        // </div>
        <>
        <button 
        onClick={()=>setOpen(true)}
        className="m-14 flex rounded-sm justify-center p-2 w-[10%] bg-red-600 text-white">
            Delete
        </button>
        <DeleteModal open={open} onClose={()=>setOpen(false)}>
            <img src="Icons/delete.png"
            className="size-56 mx-auto bg-red-500 rounded"/>
        </DeleteModal>
        </>
    )
}

export default Login;