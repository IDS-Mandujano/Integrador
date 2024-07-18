function Button(props) {
    return (
        <button onClick={props.onClick} className="bg-teal-600 w-full p-2 text-white rounded" onBlur={props.onBlur}>
            {props.text}
        </button>
    );
}

export default Button;
