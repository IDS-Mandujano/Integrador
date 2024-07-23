import Button from "../Modal/atoms/Button";
import ModalHeader from "../Modal/molecules/ModalHeader";
import ModalFooter from "../Modal/molecules/ModalFooter";

function DeleteModal({ open, onClose, image, title, text, onDelete }) {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors ${
                open ? "visible bg-black/20" : "invisible"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl shadow p-6 transition-all ${
                    open ? "scale-100 opacity-100" : "scale-125 opacity-0"
                }`}
            >
                <Button onClick={onClose} text="X"
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                />
                <div className="text-center w-56 mx-auto my-4 space-y-4">
                    <ModalHeader image="Icons/delete.png" title={title} text={text}/>
                    <ModalFooter onClose={onClose} onDelete={onDelete} />
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
