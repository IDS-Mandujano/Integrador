import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import GroupDetail from './pages/GroupDetail';
import AgregarAlumno from './pages/AgregarAlumno';
import HomeAlumno from './pages/HomeAlumno';
import UserContext from './context/userContext';

function App() {
  const [user, setUser] = useState({ usuario: '', grado: '', grupo: '', role: '', token: '' });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Detalles' element={<GroupDetail />} />
          <Route path='/Agregar' element={<AgregarAlumno />} />
          <Route path='/Alumnos' element={<HomeAlumno/>} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
