
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import Project from './pages/Project.jsx'


const App = () => {

  return (
    <div  >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>

    </div>
  )
}

export default App