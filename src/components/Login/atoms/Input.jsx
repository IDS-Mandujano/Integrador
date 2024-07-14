function Input(props) {
    return (
        <input 
            className="p-3 border-2 rounded border-teal-700" 
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Input;
