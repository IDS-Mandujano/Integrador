import { useState } from "react";
import { jsPDF } from "jspdf";
import ContentField from "../molecules/ContentField";
import ModalFooter from "../molecules/ModalFooter";
import ModalHeader from "../molecules/ModalHeader";

const API_KEY = 'sk-None-jkYSerUlpddwTE9i9CaKT3BlbkFJFH4EJZUZ7AjjDJrEUdFz';

function AddContent({ show, handleClose, handleSave }) {
  const [formData, setFormData] = useState({ file: null, content: "" });
  const [contentType, setContentType] = useState("");
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleContentTypeChange = (type) => {
    setContentType(type);
    setFormData({ file: null, content: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof handleSave === 'function') {
      handleSave(formData);
    } else {
      console.error('handleSave no es una función');
    }
  };

  const generateContent = async () => {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
          max_tokens: 500
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.choices[0].message.content);
      setFormData(prev => ({ ...prev, content: data.choices[0].message.content }));
    } catch (error) {
      console.error('Error al hacer la petición:', error);
      setResponse('Ocurrió un error al procesar la solicitud.');
    }
  };

  const generatePdf = async () => {
    const doc = new jsPDF();
    const margin = 10;
    const maxLineWidth = doc.internal.pageSize.getWidth() - margin * 2;
    const text = doc.splitTextToSize(response, maxLineWidth);
  
    doc.text(text, margin, margin);
  
    const pdfBlob = doc.output('blob');
    const formData = new FormData();
    formData.append('archivo', pdfBlob, 'contenido.pdf');
    const idActividad = sessionStorage.getItem('idActividad');
  
    console.log('ID Actividad en generatePdf:', idActividad);
  
    if (!idActividad || idActividad.trim() === '') {
      console.error('ID Actividad no válido');
      return;
    }
  
    formData.append('idActividad', idActividad);
  
    try {
      const uploadResponse = await fetch('/api/contenido', {
        method: 'POST',
        body: formData,
      });
  
      if (!uploadResponse.ok) {
        throw new Error(`Error al subir el archivo: ${uploadResponse.statusText}`);
      }
  
      console.log("Archivo PDF subido con éxito.");
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

  const uploadPdf = async () => {
    if (!formData.file) {
      console.error('No hay archivo para subir');
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append('archivo', formData.file);
    const idActividad = sessionStorage.getItem('idActividad');
    
    console.log('ID Actividad en uploadPdf:', idActividad);
    
    if (!idActividad || idActividad.trim() === '') {
      console.error('ID Actividad no válido');
      return;
    }
  
    formDataToSend.append('idActividad', idActividad);
  
    try {
      const uploadResponse = await fetch('/api/contenido', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (!uploadResponse.ok) {
        throw new Error(`Error al subir el archivo: ${uploadResponse.statusText}`);
      }
  
      console.log("Archivo PDF subido con éxito.");
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-25" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-lg mx-auto">
        <ModalHeader className={"bg-teal-500"} image="Icons/content.png" title="Agregar Contenido" />
        <div className="mb-4 flex space-x-4">
          <button onClick={() => handleContentTypeChange("file")}
            className={`py-2 px-4 rounded ${contentType === "file" ? "bg-teal-500 text-white" : "bg-gray-200"}`}>Subir PDF</button>
          <button onClick={() => handleContentTypeChange("content")}
            className={`py-2 px-4 rounded ${contentType === "content" ? "bg-teal-500 text-white" : "bg-gray-200"}`}>Generar Contenido
          </button>
        </div>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <ContentField contentType={contentType} formData={formData} handleChange={handleChange} />
        </form>
        {contentType === "content" && (
          <div className="mt-4">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu mensaje..." className="border border-teal-500 w-full px-3 py-2 my-2 rounded"
            />
            <button
              onClick={generateContent}
              className="py-2 px-4 bg-teal-500 text-white rounded"
            >
              Generar
            </button>
            <div className="mt-4">
              <h2 className="font-semibold text-gray-700">Respuesta:</h2>
              <p className="border border-teal-500 w-full px-3 py-2 my-2 rounded overflow-auto max-h-32">{response}</p>
              <button
                onClick={generatePdf}
                className="py-2 px-4 bg-teal-500 text-white rounded mt-2"
              >
                Generar Contenido PDF
              </button>
            </div>
          </div>
        )}
        {contentType === "file" && (
          <div className="mt-4">
            <button
              onClick={uploadPdf}
              className="py-2 px-4 bg-teal-500 text-white rounded mt-2"
            >
              Subir PDF
            </button>
          </div>
        )}
        <div className="mt-4 flex justify-end space-x-4">
          <ModalFooter isTemario={false} action1="Guardar" action2="Cancelar" handleClose={handleClose} fetch={handleSubmit} 
          action1S="bg-teal-500 text-white" action2S="bg-red-500 text-white"/>
        </div>
      </div>
    </div>
  );
}

export default AddContent;
