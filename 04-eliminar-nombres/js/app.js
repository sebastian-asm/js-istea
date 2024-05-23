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
}

function renderListHTML(names) {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  for (const name of names) {
    container.innerHTML += `
      <tr>
        <td>${name}</td>
        <td><button type="button" id="remove" value="${name}">Eliminar</button></td>
      </tr>
    `
  }

  const removeButton = document.querySelectorAll('#remove')
  removeButton.forEach((button) => button.addEventListener('click', removeName))
}

function removeName(event) {
  const { value } = event.target
  namesList = namesList.filter((name) => name !== value)
  if (namesList.length > 0) renderListHTML(namesList)
  else emptyList()
}

function emptyList() {
  const table = document.querySelector('table')
  const message = document.querySelector('h2')
  table.remove()
  message.style.display = 'block'
}

document.addEventListener('DOMContentLoaded', app)
