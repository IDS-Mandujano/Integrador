function Input(props) {
  return (
    <input type={props.type} name={props.name} value={props.value} onChange={props.onChange}
      placeholder={props.placeholder} className={props.className} disabled={props.disabled}
    />
  );
}

export default Input;