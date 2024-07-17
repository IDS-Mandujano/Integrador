import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function FormAlumno() {
    return (
        <form className="flex flex-wrap items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col mb-2">
                <Label text="Nombre(s)" />
                <Input type="text" placeholder="Jose Angel" />
            </div>
            <div className="flex flex-col mb-2">
                <Label text="Apellido P." />
                <Input type="text" placeholder="Estrada" />
            </div>
            <div className="flex flex-col mb-2">
                <Label text="Apellido M." />
                <Input type="text" placeholder="Estrada" />
            </div>
            <div className="flex flex-col mb-2">
                <Label text="Matricula" />
                <Input type="text" placeholder="123456" />
            </div>
            <div className="flex flex-col mb-2">
                <Label text="Correo" />
                <Input type="email" placeholder="correo@ejemplo.com" />
            </div>
            <div className="flex flex-col mb-2">
                <Label text="Teléfono" />
                <Input type="tel" placeholder="555-555-5555" />
            </div>
            <div className="flex flex-col mb-2">
                <Label text="Fecha de Nacimiento" />
                <Input type="date" />
            </div>
            <div className="mt-4">
                <Button text="Agregar" className="w-full" />
            </div>
        </form>
    );
}

export default FormAlumno;