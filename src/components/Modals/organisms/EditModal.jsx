import { useEffect,useState } from "react";

function EditModal({ show, handleClose, handleSave, data }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos para editar: ",formData)
    handleSave(formData);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md mx-auto overflow-y-auto h-[80vh]">
        <h2 className="text-lg font-semibold mb-4">Editar Alumno</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              name="Nombre"
              value={formData.Nombre || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Apellido Paterno</label>
            <input
              type="text"
              name="ApellidoP"
              value={formData.ApellidoP || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Apellido Materno</label>
            <input
              type="text"
              name="ApellidoM"
              value={formData.ApellidoM || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Edad</label>
            <input
              type="number"
              name="Edad"
              value={formData.Edad || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Calificación</label>
            <input
              type="number"
              name="Calificacion"
              value={formData.Calificacion || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Matrícula</label>
            <input
              type="text"
              name="Matricula"
              value={formData.Matricula || ''}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">CURP</label>
            <input
              type="text"
              name="CURP"
              value={formData.CURP || ''}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Correo</label>
            <input
              type="email"
              name="Correo"
              value={formData.Correo || ''}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Grupo</label>
            <input
              type="text"
              name="Grupo"
              value={formData.Grupo || ''}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Grado</label>
            <input
              type="text"
              name="Grado"
              value={formData.Grado || ''}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;