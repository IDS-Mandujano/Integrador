import { jsPDF } from "jspdf";

const API_KEY = import.meta.env.VITE_KEY_AI;
const API_URL = import.meta.env.VITE_AI_URL;
const LOCAL_API_URL = import.meta.env.VITE_LOCAL_API;

export const generateContent = async (input) => {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
        max_tokens: 500
      })
    });
    
    if (res.status === 401) {
      throw new Error('No autorizado. Verifica tu API Key.');
    }
    
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const { choices } = await res.json();
    const content = choices[0].message.content;
    
    return content;
  } catch (error) {
    console.error('Error al hacer la petición:', error);
    throw new Error('Ocurrió un error al procesar la solicitud.');
  }
};

export const generatePdf = (content, idActividad) => {
  if (!idActividad) throw new Error('ID Actividad no válido');

  const doc = new jsPDF();
  const margin = 10;
  const maxLineWidth = doc.internal.pageSize.getWidth() - margin * 2;
  const text = doc.splitTextToSize(content, maxLineWidth);
  doc.text(text, margin, margin);
  
  const pdfBlob = doc.output('blob');
  return { pdfBlob, pdfUrl: URL.createObjectURL(pdfBlob) };
};

export const savePdf = async (pdfBlob, idActividad) => {
  if (!idActividad || !pdfBlob) throw new Error('ID Actividad no válido o PDF no generado');

  const formDataToSend = new FormData();
  formDataToSend.append('archivo', pdfBlob, 'contenido.pdf');
  formDataToSend.append('idActividad', idActividad);
  
  try {
    const uploadResponse = await fetch(`${LOCAL_API_URL}/contenido/`, {
      method: 'POST',
      body: formDataToSend,
    });
    
    if (!uploadResponse.ok) throw new Error(`Error al subir el archivo: ${uploadResponse.statusText}`);
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    throw error;
  }
};

export const uploadPdf = async (file, idActividad) => {
  if (!file) throw new Error('No hay archivo para subir');
  
  const formDataToSend = new FormData();
  formDataToSend.append('archivo', file);
  formDataToSend.append('idActividad', idActividad);

  try {
    const uploadResponse = await fetch(`${LOCAL_API_URL}/contenido/`, {
      method: 'POST',
      body: formDataToSend,
    });
    
    if (!uploadResponse.ok) throw new Error(`Error al subir el archivo: ${uploadResponse.statusText}`);
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    throw error;
  }
};