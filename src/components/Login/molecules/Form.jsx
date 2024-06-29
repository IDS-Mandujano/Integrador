import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

function Form() {

  return (
    <form className="bg-white container max-w-sm mx-auto p-10 rounded">
      <div className="flex justify-center m-4">
        <Image style="w-28" image="logo.jpeg" />
      </div>
      <div>
        <Text style="text-center font-bold text-lg" text="Inicio de sesión"/>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <Label style="font-bold" label="Usuario:"/>
        <Input style="mt-4 w-60 p-1 rounded border-teal-900 border-2" type="text" text="ExampleGt23$"/>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <Label style="font-bold" label="Contraseña:"/>
        <Input style="mt-4 color-black w-60 p-1 rounded border-teal-900 border-2" type="password" text="Password"/>
      </div>
      <div className="flex justify-center mt-14">
        <Button style="font-bold rounded bg-emerald-700 p-2 w-60 text-white" type="submit" text="Iniciar sesión" />
      </div>
    </form>
  );
}

export default Form;
