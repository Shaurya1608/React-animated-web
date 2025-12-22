
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import Project from './pages/Project.jsx'
import Navbar from './components/navigation/Navbar.jsx'
import FullScreenNav from './components/navigation/FullScreenNav.jsx'


const App = () => {

  return (
    <div  >
      {/* <Navbar/> */}
      <FullScreenNav/>

      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes> */}

    </div>
  )
}

export default App