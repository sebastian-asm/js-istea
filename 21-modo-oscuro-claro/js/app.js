const THEME = 'theme-mode'
const DARK = '#111'
const LIGHT = '#eee'

function app() {
  applyTheme()
}

function applyTheme() {
  const body = document.querySelector('body')
  const hrefs = document.querySelectorAll('a')
  const themeButton = document.querySelector('#theme')
  let theme = getTheme()
  if (!theme) theme = DARK

  body.style.backgroundColor = theme
  body.style.color = theme === DARK ? LIGHT : DARK
  hrefs.forEach((href) => (href.style.color = theme === DARK ? LIGHT : DARK))
  setTheme(theme)

  if (themeButton) {
    themeButton.textContent = theme === DARK ? 'Claro' : 'Oscuro'
    themeButton.addEventListener('click', changeTheme)
  }
}

function changeTheme() {
  let theme = getTheme()
  theme = theme === DARK ? LIGHT : DARK
  setTheme(theme)
  applyTheme()
}

function setTheme(value) {
  sessionStorage.setItem(THEME, JSON.stringify(value))
}

function getTheme() {
  return JSON.parse(sessionStorage.getItem(THEME))
}

document.addEventListener('DOMContentLoaded', app)
