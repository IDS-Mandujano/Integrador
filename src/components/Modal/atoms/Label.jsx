function Label({ text, className }) {
    return (
        <label className={`block text-sm font-medium text-gray-700 ${className}`}>
            {text}
        </label>
    );
}

export default Label;
