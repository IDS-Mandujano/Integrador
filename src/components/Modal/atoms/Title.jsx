function Title(props) {
    return <h3 className={`text-lg font-black text-gray-800 ${props.className}`}>{props.text}</h3>;
}

export default Title;
