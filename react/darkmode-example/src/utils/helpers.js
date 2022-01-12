import { themes } from './themes'

// This function switches all CSS variable values with the selected theme values.
export const switchTheme = (themeName) => {
  localStorage.setItem('app-theme', themeName)
  themes[themeName].forEach(theme => {
    document.documentElement.style.setProperty(theme.var, theme.value)
  })
}