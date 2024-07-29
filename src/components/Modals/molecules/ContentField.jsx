function ContentField({ contentType, formData, handleChange }) {
  const inputStyle = "border border-teal-500 w-full px-3 py-2 my-2 rounded";

  if (contentType === "file") {
    return (
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Subir PDF</label>
        <input type="file" name="file" accept=".pdf" className={inputStyle} onChange={handleChange} />
      </div>
    );
  }

  return null;
}

export default ContentField;
