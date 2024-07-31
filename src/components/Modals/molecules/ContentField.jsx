import Label from "../atoms/Label";

function ContentField({ contentType, handleChange }) {
  const inputStyle = "border border-teal-500 w-3/6 px-3 py-2 my-2 rounded";

  if (contentType === "file") {
    return (
      <div className="flex flex-col items-center">
        <Label text="Subir PDF" className="mb-2 font-semibold text-gray-700" />
        <input type="file" name="file" accept=".pdf" className={inputStyle} onChange={handleChange} />
      </div>
    );
  }

  return null;
}

export default ContentField;