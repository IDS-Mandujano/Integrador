function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
