function Button(props) {
    return (
        <button 
            className={`bg-blue-500 text-white py-2 px-4 rounded ${props.className}`} 
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;
