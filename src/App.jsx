
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/HomePages'
import PokedexPage from './pages/PokedexPage'
import ProtectedRouter from './pages/ProtectedRouter'
import PokeInfo from './pages/PokeInfo'

function App() {
  
  return (
   <div className='app'>
    <Routes>
      <Route path='/' element={<HomePages />} />
      <Route element={<ProtectedRouter />}>
      <Route path='/pokedex' element={<PokedexPage />} />
      <Route path='/pokedex/:name' element={<PokeInfo />} />
      </Route>
    </Routes>
  </div>
  )
}

export default App
