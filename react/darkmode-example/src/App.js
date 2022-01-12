import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import DarkmodeToggle from './components/DarkmodeToggle'
import { switchMode } from './utils/helpers'

const App = () => {
  const [mode, setMode] = useState('dark')

  // When the screen mode changes, then the callback function that changes styles executes
  useEffect(() => switchMode(mode), [mode])

  return (
    <div className="App">
      <header className="App-header">
        <DarkmodeToggle mode={mode} setMode={setMode} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
