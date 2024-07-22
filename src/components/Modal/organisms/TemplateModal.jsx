import ModalHeader from "../molecules/ModalHeader";
import ModalFooter from "../molecules/ModalFooter";

function TemplateModal(props) {
    return (
        <div className="text-center w-56">
            <ModalHeader
                image={props.image}
                title={props.title}
                text={`Estas seguro de eliminar a ${props.text}`}
                className={props.className}
            />
            <ModalFooter onClose={props.onClose} />
        </div>
    );
}

export default TemplateModal;
