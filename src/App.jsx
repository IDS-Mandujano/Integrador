import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import GroupDetail from './pages/GroupDetail';
import AgregarAlumno from './pages/AgregarAlumno';
import VistaInscritos from './pages/VistaInscritos';
import Tareas from "./pages/Tareas"
//import RouteProtectedAdmin from './pages/RouteProtectedAdmin'
//import RouteProtectedAlumno from './pages/RouteProtectedAlumno';
import UserContext from './context/userContext';
import CalificarTarea from './components/Administrador/Tareas/organisms/CalificarTarea';

function App() {
  const [user, setUser] = useState(
    { usuario: '', grado: '', grupo: '',role: '',
    nombre: '',apellido_p: '',apellido_m : '', token: '' });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Login />}/>
          {/*<Route element={<RouteProtectedAdmin/>}>*/}
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Detalles' element={<GroupDetail/>}/>
            <Route path='/Agregar' element={<AgregarAlumno/>}/>
            <Route path='/Calificar' element={<CalificarTarea/>}/>
          {/*</Route>*/}
          {/*<Route element={<RouteProtectedAlumno/>}>*/}
            <Route path='/Alumno' element={<VistaInscritos/>}/>
            <Route path='/Tareas' element={<Tareas/>}/>
          {/*</Route>*/}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
