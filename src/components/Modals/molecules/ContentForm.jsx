import Input from "../atoms/Input";
import Button from "../atoms/Button";
import ContentField from "./ContentField";
import PdfPreview from "./PdfPreview";

function ContentForm(props) {
  return (
    <form className="flex flex-col space-y-4" onSubmit={props.handleSubmit}>
      <ContentField 
        contentType={props.contentType} 
        formData={props.formData} 
        handleChange={props.handleChange} 
      />
      {props.contentType === "content" && (
        <div className="mt-4">
          <Input type="text" value={props.input} onChange={(e) => props.setInput(e.target.value)} 
            placeholder="Escribe tu mensaje..." className="border border-teal-500 w-full px-3 py-2 my-2 rounded"/>
          <Button type="button" onClick={props.handleSubmit} className="py-2 px-4 bg-teal-500 text-white rounded" text={"Generar"}/>
          <PdfPreview pdfUrl={props.pdfUrl} response={props.response} onSavePdf={props.handleSavePdf} handleClose={props.handleClose}/>
        </div>
      )}
    </form>
  );
}

export default ContentForm;