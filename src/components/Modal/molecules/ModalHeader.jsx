import Icon from "../atoms/Icon";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

function ModalHeader(props) {
    return (
        <div className={props.className}>
            <Icon className="size-16 mx-auto bg-red-500 rounded" image={props.image} />
            <div>
                <Title className={props.className} text={props.title} />
                <Text className={props.className} text={props.text} />
            </div>
        </div>
    );
}

export default ModalHeader;
