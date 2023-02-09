import { Route, Routes } from 'react-router-dom'
import Player from "./components/Player"
import Testando from "./components/Testando"

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Testando/>} />
        </Routes>
      
    </div>
  )
}

export default App
