import { personas } from './db.js'

function app() {
  renderListHTML()
  const popupButton = document.querySelector('#popup')
  popupButton.addEventListener('click', showPopup)
}

function renderListHTML() {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  for (const persona of personas) {
    const { nombre, estaMarcado } = persona
    container.innerHTML += /*html*/ `
      <label>
        <input type="checkbox" id="checkbox" value="${nombre}" ${estaMarcado ? 'checked' : ''} />
        ${nombre}
      </label>
    `
  }

  const checkboxList = document.querySelectorAll('#checkbox')
  for (const checkbox of checkboxList) checkbox.addEventListener('change', updateState)
}

function updateState(event) {
  const { value } = event.target
  personas.forEach((persona) => {
    if (persona.nombre === value) persona.estaMarcado = true
    else persona.estaMarcado = false
  })
  renderListHTML()
}

function showPopup() {
  personas.forEach(({ nombre, estaMarcado }) => estaMarcado && alert(nombre))
}

document.addEventListener('DOMContentLoaded', app)
