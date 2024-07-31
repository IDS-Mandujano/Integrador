import Button from "../atoms/Button";

function ContentType(props) {
  return (
    <div className="mb-4 flex space-x-4 w-full justify-center items-center">
      <Button onClick={() => props.onContentTypeChange("file")}
        className={`py-2 px-4 rounded ${props.contentType === "file" ? "bg-teal-500 text-white" : "bg-gray-400"}`} 
        text={"Subir PDF"}
      />
      <Button 
        onClick={() => props.onContentTypeChange("content")}
        className={`py-2 px-4 rounded ${props.contentType === "content" ? "bg-teal-500 text-white" : "bg-gray-400"}`} 
        text="Generar Contenido"/>
      {props.showCancel && (
        <Button onClick={props.handleClose} className="py-2 px-4 rounded bg-red-500 text-white" text="Cancelar"/>
      )}
    </div>
  );
}

export default ContentType;