import Label from '../atoms/Label';
import Input from '../atoms/Input';

function FormField(props) {
  return (
    <div className="mb-4">
      <Label text={props.label} />
      <Input type="text" name={props.name} value={props.value} onChange={props.onChange} disabled={props.disabled}
        placeholder={props.placeholder} 
        className={`w-full px-3 py-2 border border-gray-300 rounded ${props.disabled ? "bg-gray-100" : ""}`}/>
    </div>
  );
}

export default FormField;