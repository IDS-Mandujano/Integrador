import Button from "../atoms/Button";
import Input from "../atoms/Input";

function Form(){
    return (
        <form>
            <div>
                <Input type="text" placeholder="Ingresa tu identificador"/>
                <Input type="password" placeholder="Password$1"/>
            </div>
            <div>
                <Button text="Iniciar sesion"/>
            </div>
        </form>
    )
}

export default Form