function Button(props) {
    return (
        <button 
            className={`bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded ${props.className}`} 
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;
