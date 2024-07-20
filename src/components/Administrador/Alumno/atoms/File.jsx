function File(props) {
  return (
    <a href={props.path} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      {props.name}
    </a>
  );
}

export default File;
