import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import GroupDetail from './pages/GroupDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Group/Details' element={<GroupDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
