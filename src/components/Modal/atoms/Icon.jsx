function Icon(props) {
  return <img src={props.image} className={`size-16 mx-auto bg-red-500 rounded ${props.className}`} alt="icon" />;
}

export default Icon;
