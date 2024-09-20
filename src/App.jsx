import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// A reusable Logo component
const Logo = ({ href, src, alt, className }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} className={className} alt={alt} />
  </a>
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logo-container">
        <Logo href="https://vitejs.dev" src={viteLogo} alt="Vite logo" className="logo" />
        <Logo href="https://react.dev" src={reactLogo} alt="React logo" className="logo react" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button 
          onClick={() => setCount(count + 1)} 
          className="btn"
          aria-label="Increase count"
        >
          Count is {count}
        </button>
        <button 
          onClick={() => setCount(0)} 
          className="btn reset"
          aria-label="Reset count"
        >
          Reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more & aaaaaaa Raja jiiiiiiiii
      </p>
    </>
  )
}

export default App
