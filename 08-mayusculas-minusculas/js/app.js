import { personas } from './db.js'

function app() {
  renderListHTML()
  const convertButton = document.querySelector('#convert')
  const selectAllButton = document.querySelector('#select-all')
  convertButton.addEventListener('click', convert)
  selectAllButton.addEventListener('click', selectAll)
}

function renderListHTML() {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  for (const persona of personas) {
    const { nombre, estaMarcado } = persona
    container.innerHTML += `
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
  const { value, checked } = event.target
  personas.forEach((persona) => {
    if (persona.nombre === value) {
      if (checked) persona.estaMarcado = true
      else persona.estaMarcado = false
    }
  })
  renderListHTML()
}

function convert() {
  personas.forEach((persona) => {
    if (persona.estaMarcado) persona.nombre = persona.nombre.toUpperCase()
    else persona.nombre = persona.nombre.toLowerCase()
  })
  renderListHTML()
}

function selectAll() {
  personas.forEach((persona) => (persona.estaMarcado = true))
  renderListHTML()
}

document.addEventListener('DOMContentLoaded', app)
