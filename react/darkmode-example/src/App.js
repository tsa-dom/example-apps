import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import { switchTheme } from './utils/helpers'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') ? localStorage.getItem('app-theme') : 'dark'
  )

  // When the theme changes, then the callback function that changes styles executes
  useEffect(() => switchTheme(theme), [theme])

  return (
    <div className="App">
      <header className="App-header">
        <ThemeToggle theme={theme} setTheme={setTheme} />
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
