import Button from "../atoms/Button";

function ModalFooter(props) {
    return (
        <div className="flex gap-4">
            <Button
                className="text-white p-2 bg-red-500 rounded-sm w-full"
                onClick={props.onDelete}
                text="Delete"
            />
            <Button
                className="text-white p-2 bg-gray-400 rounded-sm w-full"
                onClick={props.onClose}
                text="Cancel"
            />
        </div>
    );
}

export default ModalFooter;
