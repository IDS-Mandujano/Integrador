import Form from "../molecules/Form";
import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

function ContainerForm() {
    return (
        <div className="flex flex-col items-center min-h-screen w-full md:w-2/5 p-6">
            <div className="flex flex-col items-center h-full w-full">
                <Image image="logo.png"/>
                <Title text="Iniciar sesión" className="text-white text-2xl mb-4" />
                <Text text="Ingresa tus credenciales para ingresar" className="text-white mb-4" />
                <div className="w-full mt-[10%] h-full p-4 rounded-lg">
                    <Form/>
                </div>
            </div>
        </div>
    );
}

export default ContainerForm;
