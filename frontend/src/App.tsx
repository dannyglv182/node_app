import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Game } from './components/game'
import { Games } from './components/games'
import axios  from 'axios'
import {Link, Route, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/games' element={<Games />} />
      </Routes>
    </div>
  )
}

export default App
