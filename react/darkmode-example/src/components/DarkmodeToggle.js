import React from 'react'

const DarkmodeToggle = ({ mode, setMode }) => {

  const handleToDark = () => {
    setMode('dark')
  }

  const handleToLight = () => {
    setMode('light')
  }

  return (
    <div>
      {mode === 'dark' &&
        <button
          className='toggle-button'
          onClick={handleToLight}
        >Lightmode</button>
      }
      {mode === 'light' &&
        <button
          className='toggle-button'
          onClick={handleToDark}
        >Darkmode</button>
      }
    </div>
  )
}

export default DarkmodeToggle
