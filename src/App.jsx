import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <img src="https://images.squarespace-cdn.com/content/v1/57a65baf37c58153c17d7c1f/1645373088680-AN38K82N3NMY6SQ435PT/pokemon-legends-arceus.jpg?format=1500w" alt="Pokemon" className="bg-image"/>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
