import CardList from "../UsuarioAlumno/Organisms/CardList";
function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Tus Asignaturas</h1>
      <p className="text-gray-600 mb-8">Explora los grupos con un solo clic</p>
      <CardList />
    </div>
  );
}

export default Dashboard;
