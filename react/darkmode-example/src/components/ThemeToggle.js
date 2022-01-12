import React from 'react'

const ThemeToggle = ({ theme, setTheme }) => {

  const handleToDark = () => setTheme('dark')

  const handleToLight = () => setTheme('light')

  // This isn't a great way to define these buttons but the easiest to implement.
  return (
    <div>
      {theme === 'dark' &&
        <button
          className='toggle-button'
          onClick={handleToLight}
        >Light mode</button>
      }
      {theme === 'light' &&
        <button
          className='toggle-button'
          onClick={handleToDark}
        >Dark mode</button>
      }
    </div>
  )
}

export default ThemeToggle
