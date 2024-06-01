const persons = [
  'Manuel Sadosky',
  'Silvina Ocampo',
  'Alfonsina Storni',
  'Juana Manuela Gorriti',
  'Alejandra Pizarnik',
  'Cora Sadosky',
  'Juana Azurduy',
  'Alfonsina Chiclana',
  'Juana Larreta',
  'Marta Sanchez',
  'Mariquita Sanchez de Thompson',
  'Maria Remedios del Valle',
  'Marta milikowski',
  'Dulcinea del Toboso'
]

function app() {
  renderListHTML()
}

function renderListHTML() {
  const listContainer = document.querySelector('#container')
  const firstOption = document.createElement('option')
  firstOption.selected = true
  firstOption.disabled = true
  firstOption.textContent = '- Seleccionar -'
  listContainer.append(firstOption)

  for (const person of persons) {
    const option = document.createElement('option')
    option.textContent = person
    option.value = person
    listContainer.append(option)
  }

  listContainer.addEventListener('change', showName)
}

function showName(event) {
  const { value } = event.target
  const name = document.querySelector('#name')
  name.textContent = value
}

document.addEventListener('DOMContentLoaded', app)
