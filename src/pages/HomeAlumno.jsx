import Dashboard from '../components/Templates/Dashboard';
import UserContext from '../context/userContext';
import { useContext } from 'react';
import HeaderAlum from "../components/UsuarioAlumno/HeaderAlumno/Organisms/HeaderAlum"
function HomeAlumno() {
  const { user } = useContext(UserContext);

  return (
    <div>
        <HeaderAlum></HeaderAlum>
      <h1>Bienvenido  {user.username}</h1>
      <Dashboard />
    </div>
  );
}

export default HomeAlumno;
