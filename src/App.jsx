import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import GroupDetail from './pages/GroupDetail'
import AgregarAlumno from './pages/AgregarAlumno'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Grupo/Detalles' element={<GroupDetail/>}/>
        <Route path='/Agregar/Alumno' element={<AgregarAlumno/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
