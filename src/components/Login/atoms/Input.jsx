function Input(props) {
    return (
        <input 
            className="p-3 border rounded border-emerald-600" 
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Input;
