import { Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Details from './components/detail/Details'
import CreatePoke from './components/create/CreatePoke'

function App() {
  
  return (
    
    <>
    {/* revisar render de navegacion problemas con store */}
      <Route path='/' element={<NavBar/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<CreatePoke/>}/>
      <Route path='/detail/:id'  element={<Details/>}/>
    </>
    
  )
}

export default App
