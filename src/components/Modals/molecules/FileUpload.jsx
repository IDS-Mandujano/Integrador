function FileUpload({ onFileChange }) {
  return (
    <div className="mb-4">
      <input type="file" onChange={onFileChange} className="w-full p-2 border border-gray-300 rounded" />
    </div>
  );
}

export default FileUpload;