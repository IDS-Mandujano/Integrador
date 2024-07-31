function File(props){
    return (
        <button 
          onClick={() => window.open(props.onClick, '_blank', 'noopener,noreferrer')}
          className={`text-blue-500 hover:underline mt-2 ${props.className}`}
        >
          {props.text}
        </button>
      );
}

export default File