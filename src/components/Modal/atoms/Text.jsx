function Text(props) {
  return <p className={`text-sm text-gray-500 ${props.className}`}>{props.text}</p>;
}

export default Text;
