import { css, styles } from './styles'

// this fuction changes CSS variable values
const update = (variable, style) => {
  document.documentElement.style.setProperty(variable, style)
}

export const switchMode = (mode) => {
  switch (mode) {
    case 'dark':
      update(css.BACKGROUND_COLOR, styles.dark.backgroundColor)
      update(css.TEXT_COLOR, styles.dark.textColor)
      // define here all dark mode style updates
      break
    case 'light':
      update(css.BACKGROUND_COLOR, styles.light.backgroundColor)
      update(css.TEXT_COLOR, styles.light.textColor)
      // define here all light mode style udpates
      break
    default:
      break
  }
}