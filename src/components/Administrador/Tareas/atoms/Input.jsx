function Input({ type, name, value, onChange, className, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 p-2 rounded ${className}`}
      placeholder={placeholder}
    />
  );
}

export default Input;
