function Label({ text, className }) {
    return (
      <p className={`text-sm ${className}`}>{text}</p>
    );
  }
  
  export default Label;