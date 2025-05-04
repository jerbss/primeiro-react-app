import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [textoInput, setTextoInput] = useState('');

  function handleInputChange(event) {
    setTextoInput(event.target.value);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Peito + Bunda = ❤️</h1>
      <div>
        <label htmlFor="meuInput">Digite algo: </label>
        <input
          type="text"
          id="meuInput"
          value={textoInput}
          onChange={handleInputChange}
        />
      </div>
      <p>Você digitou: {textoInput}</p>
      <nav>
        <Link to="/home">Ir para a Home Page</Link>
      </nav>
      <div className="card">
        <button onClick={() => setCount((count) => count + 17)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Aprendendo React com a ajuda do Copilot!
      </p>
    </>
  )
}

export default App
