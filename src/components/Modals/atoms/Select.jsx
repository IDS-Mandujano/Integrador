function Select({ name, value, onChange, options, className }) {
  return (
    <select name={name} value={value} onChange={onChange} className={className}>
      <option value="" disabled>Seleccione el parcial</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default Select;