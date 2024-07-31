import Button from "../Atoms/Button";

function Card(props) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 m-4 shadow-md w-64">
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p className="text-gray-700">{props.subtitle}</p>
      <p className="text-gray-500 mb-4">{props.members} - Miembros</p>
      <Button label="Inspeccionar" onClick={props.onInspect} />
    </div>
  );
}

export default Card;
