import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import fields from "../../../../data/formData"

function FormAlumno() {

    return (
        <form className="flex flex-wrap items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col mb-2">
                    <Label text={field.label} />
                    <Input type={field.type} placeholder={field.placeholder} />
                </div>
            ))}
            <div className="mt-4">
                <Button text="Agregar" className="w-full" />
            </div>
        </form>
    );
}

export default FormAlumno;