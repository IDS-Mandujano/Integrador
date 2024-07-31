import React from 'react';
import Select from '../atoms/Select';

function ParcialSelect({ name, value, onChange }) {
  const options = [
    { value: "Primer", label: "Primer Parcial" },
    { value: "Segundo", label: "Segundo Parcial" },
    { value: "Tercer", label: "Tercer Parcial" }
  ];

  return (
    <Select name={name} value={value} onChange={onChange} options={options} 
    className="mb-4 border border-teal-600 rounded-sm p-2 w-full"/>
  );
}

export default ParcialSelect;