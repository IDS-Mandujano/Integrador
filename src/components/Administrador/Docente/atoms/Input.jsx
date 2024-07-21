function Input(props) {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder} 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={props.value}
            name={props.name}
            onChange={props.onChange}
        />
    );
}

export default Input;
