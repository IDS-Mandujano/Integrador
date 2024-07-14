import Button from "../atoms/Button";
import Input from "../atoms/Input";

function Form() {
    return (
        <form className="p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <div className="flex flex-col space-y-4 mb-4">
                <Input type="text" placeholder="Ingresa tu identificador" className="p-2 rounded-md" />
                <Input type="password" placeholder="Password$1" className="p-2 rounded-md" />
            </div>
            <div className="flex justify-center">
                <Button text="Ingresar" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" />
            </div>
        </form>
    );
}

export default Form;