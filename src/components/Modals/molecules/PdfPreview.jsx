import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

function PdfPreview(props) {
  return (
    <div className="mt-4">
      <Title text="Respuesta:" className="font-semibold text-gray-700" />
      <Text 
        text={props.response} 
        className="border border-teal-500 w-full px-3 py-2 my-2 rounded overflow-auto max-h-32" 
      />
      {props.pdfUrl && (
        <div className="mt-4">
          <Title text="Vista previa del PDF:" className="font-semibold text-gray-700" />
          <iframe 
            src={props.pdfUrl} 
            className="w-full h-80 border border-teal-500 rounded my-2" 
            title="Vista previa del PDF"
          ></iframe>
          <div className="flex space-x-4 mt-4">
            <Button href={props.pdfUrl} download="contenido.pdf" className="py-2 px-4 bg-teal-500 text-white rounded" text={"Descargar PDF"}/>
            <Button onClick={props.onSavePdf}  className="py-2 px-4 bg-teal-500 text-white rounded"  text={"Guardar PDF"}/>
            <Button onClick={props.handleClose} className="py-2 px-4 bg-red-500 text-white rounded"  text={"Cancelar"}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default PdfPreview;