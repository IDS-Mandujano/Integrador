function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={`p-2 rounded-lg ${props.className}`}
        >
            {props.text}
        </button>
    );
}

export default Button;
