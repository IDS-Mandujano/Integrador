function Label({text, className}) {
    return <label className={`block mb-2 text-gray-700 ${className}`}>{text}</label>;
}

export default Label;
