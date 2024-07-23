import Icon from "../atoms/Icon";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

function ModalHeader(props) {
    return (
        <div className={props.className}>
            <Icon className="size-16 mx-auto bg-red-500 rounded" image={props.image} />
            <div className="space-y-4">
                <Title className="text-xl font-semibold" text={props.title} />
                <Text className="text-gray-600" text={props.text} />
            </div>
        </div>
    );
}

export default ModalHeader;
