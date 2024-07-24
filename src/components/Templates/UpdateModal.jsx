import Button from "../Modal/atoms/Button";
import Title from "../Modal/atoms/Title"
import Input from "../Modal/atoms/Input";
import Label from "../Modal/atoms/Label";

function UpdateModal({ open, onClose, onSave, data, onChange }) {
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
                <Button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                    text="X"
                />
                <div className="mb-4">
                    <Title className="text-lg font-semibold mb-2" text="Editar Informacion"/> 
                    <form>
                        <div className="mb-4">
                            <Label text="Name" className="block mb-1" />
                            <Input
                                type="text"
                                placeholder="Enter name"
                                value={data.name}
                                onChange={(e) => onChange('name', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <Label text="Email" className="block mb-1" />
                            <Input
                                type="email"
                                placeholder="Enter email"
                                value={data.email}
                                onChange={(e) => onChange('email', e.target.value)}
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <Button
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                text="Cancel"
                            />
                            <Button
                                onClick={onSave}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                text="Save"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateModal;
