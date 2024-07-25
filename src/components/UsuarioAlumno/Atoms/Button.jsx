function Button(props) {
  return (
    <button onClick={props.onClick} className="bg-blue-500 text-white py-2 px-4 rounded">
      {props.label}
    </button>
  );
}

export default Button;
