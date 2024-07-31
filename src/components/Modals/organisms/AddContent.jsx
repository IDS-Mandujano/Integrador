import { useState } from "react";
import { generateContent, generatePdf, savePdf, uploadPdf } from "../../../services/pdfService";
import ContentType from "../molecules/ContentType";
import ContentForm from "../molecules/ContentForm";
import ModalHeader from "../molecules/ModalHeader";

function AddContentModal({ show, handleClose, idActividad }) {
  const [formData, setFormData] = useState({ file: null });
  const [contentType, setContentType] = useState("");
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [pdfBlob, setPdfBlob] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');

  const handleChange = (e) => 
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.files ? e.target.files[0] : e.target.value }));

  const handleContentTypeChange = (type) => {
    setContentType(type);
    setFormData({ file: null });
    setPdfUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contentType === "file") {
      try {
        await uploadPdf(formData.file, idActividad);
        handleClose();
      } catch (error) {
        console.error("Error subiendo el PDF:", error);
      }
    } else {
      try {
        const generatedContent = await generateContent(input);
        setResponse(generatedContent);
        const { pdfBlob, pdfUrl } = generatePdf(generatedContent, idActividad);
        setPdfBlob(pdfBlob);
        setPdfUrl(pdfUrl);
      } catch (error) {
        console.error("Error generando el contenido o el PDF:", error);
      }
    }
  };

  const handleSavePdf = async () => {
    try {
      if (pdfBlob) {
        await savePdf(pdfBlob, idActividad);
        handleClose();
      }
    } catch (error) {
      console.error("Error guardando el PDF:", error);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-25" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-full max-w-3xl mx-auto overflow-auto max-h-[80vh]">
        <ModalHeader className="bg-teal-500" image="Icons/content.png" title="Agregar Contenido" />
        <ContentType contentType={contentType} onContentTypeChange={handleContentTypeChange} 
          handleClose={handleClose} showCancel={contentType === "file"}/>
        
        <ContentForm contentType={contentType} formData={formData} handleChange={handleChange} input={input} 
          setInput={setInput} handleSubmit={handleSubmit} response={response}  
          pdfUrl={pdfUrl} handleSavePdf={handleSavePdf} handleClose={handleClose}/>
      </div>
    </div>
  );
}

export default AddContentModal;