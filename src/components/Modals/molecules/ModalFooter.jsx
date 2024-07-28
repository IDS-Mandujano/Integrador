import Button from "../atoms/Button";

function ModalFooter(props) {
  return (
    <div className="w-full flex justify-center space-x-4">
      <Button className={props.action1S} text={props.action1} onClick={props.fetch} />
      <Button className={props.action2S} text={props.action2} onClick={props.handleClose} />
    </div>
  );
}

export default ModalFooter;