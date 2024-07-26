import Button from "../atoms/Button";

function ModalFooter(props) {
  return (
    <div className="w-full flex justify-center space-x-4">
      <Button className={props.action1S} text={props.action1} onClick={props.handleUpload} />
      <Button className={props.action2S} text={props.action2} onClick={props.handleClose} />
      {props.isTemario===true && (<Button className={props.action3S} 
      text={props.action3} onClick={props.handleAdditionalAction}/>)}
    </div>
  );
}

export default ModalFooter;
