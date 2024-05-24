let namesList = [
  'Manuel Sadosky',
  'Silvina Ocampo',
  'Alfonsina Storni',
  'Juana Manuela Gorriti',
  'Alejandra Pizarnik',
  'Cora Sadosky'
]

function app() {
  renderListHTML(namesList)
  const duplicateButton = document.querySelector('#duplicate')
  const selectAllButton = document.querySelector('#select-all')
  duplicateButton.addEventListener('click', duplicate)
  selectAllButton.addEventListener('click', selectAll)
}

function renderListHTML(names) {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  for (const name of names) {
    container.innerHTML += `
      <label>
        <input type="checkbox" id="checkbox" value="${name}" />
        ${name}
      </label>
    `
  }
}

function duplicate() {
  const checkboxList = document.querySelectorAll('#checkbox')
  for (const checkbox of checkboxList) {
    if (checkbox.checked) namesList.push(`${checkbox.value} - copia`)
  }
  renderListHTML(namesList)
}

function selectAll() {
  const checkboxList = document.querySelectorAll('#checkbox')
  for (const checkbox of checkboxList) {
    if (!checkbox.checked) checkbox.checked = true
  }
}

document.addEventListener('DOMContentLoaded', app)
