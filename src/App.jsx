import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import GroupDetail from './pages/GroupDetail'
import AgregarAlumno from './pages/AgregarAlumno'
import VistaInscritos from './pages/VistaInscritos'
import GrupoContext from './context/grupoContext'

function App() {
  const [grupos, setGrupos] = useState({ grado: '', grupo: '' });

  return (
    <GrupoContext.Provider value={{ grupos, setGrupos }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detalles' element={<GroupDetail />} />
          <Route path='/agregar' element={<AgregarAlumno />} />
          <Route path='/alumnos' element={<VistaInscritos />} />
        </Routes>
      </BrowserRouter>
    </GrupoContext.Provider>
  )
}

export default App;
