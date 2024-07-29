import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import GroupDetail from './pages/GroupDetail';
import AgregarAlumno from './pages/AgregarAlumno';
import VistaInscritos from './pages/VistaInscritos';
import Tareas from "./pages/Tareas"
import RouteProtectedAlumno from './pages/RouteProtectedAlumno';
import UserContext from './context/userContext';
import Temario from './pages/Temario';

function App() {
  const [user, setUser] = useState(
    { usuario: '', grado: '1',grupo: 'D',role: '',
    nombre: '',apellido_p: '',apellido_m : '', token: '' });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Login />}/>
          {/* <Route element={<RouteProtectedAdmin/>}> */}
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Detalles' element={<GroupDetail/>}/>
            <Route path='/Agregar' element={<AgregarAlumno/>}/>
          {/* </Route> */}
          <Route element={<RouteProtectedAlumno/>}>
            <Route path='/Alumno' element={<VistaInscritos/>}/>
            <Route path='/Tareas' element={<Tareas/>}/>
            <Route path='/Temario' element={<Temario />} /> 
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
