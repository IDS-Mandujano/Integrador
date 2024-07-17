function Input(props) {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder} 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

export default Input;
