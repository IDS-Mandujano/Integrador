import ModalHeader from "../molecules/ModalHeader"
import ModalFooter from "../molecules/ModalFooter"
import Input from "../atoms/Input"

function AddTemario (props){
    if(!props.show) return null

    return (
        <div>
            <ModalHeader title="Temario" text="Seleccione el metodo" image="Icons/upload_pdf.jpeg" className="bg-red-600"/>
            <div>
                <Input/>
            </div>
            <ModalFooter isTemario={false} action1="Subir PDF" action2="Cancelar"
            handleClose={props.hancleClose} action1S="bg-teal-500 text-white" action2S="bg-gray-500 text-white"/>
        </div>
    )
}

export default AddTemario