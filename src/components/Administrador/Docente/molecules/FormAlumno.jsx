import Label from "../atoms/Label"
import Button from "../atoms/Button"
import Input from "../atoms/Input"

function FormAlumno(){
    return (
        <form>
            <div>
                <Label text="Nombre(s)"/>
                <Input type="text" placeholder="Jose Angel"/>
            </div>
                <Label text="Apellido P."/>
                <Input type="text" placeholder="Estrada"/>
            <div>
            </div>
                <Label text="Apellido M."/>
                <Input type="text" placeholder="Estrada"/>
            <div>  
            <Button text="Agregar"/>
            </div>
        </form>
    )
}

export default FormAlumno