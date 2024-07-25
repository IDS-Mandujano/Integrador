function Button({ onClick, text, className }) {
    return (
      <button onClick={onClick} className={`px-4 py-2 rounded ${className}`}>
        {text}
      </button>
    );
  }
  
  export default Button;  