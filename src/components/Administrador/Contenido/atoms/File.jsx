function File (props){
    return <a className={props.className} href={props.path}>{props.filename}</a>
}

export default File