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
  const removeButton = document.querySelector('#remove')
  removeButton.addEventListener('click', removeSelected)
}

function renderListHTML(names) {
  const container = document.querySelector('#container')
  container.innerHTML = ''

  if (names.length > 0) {
    for (const name of names) {
      container.innerHTML += `
        <label>
          <input type="checkbox" id="checkbox" value="${name}" />
          ${name}
        </label>
      `
    }
  } else {
    emptyList()
  }
}

function removeSelected() {
  const checkboxList = document.querySelectorAll('#checkbox')
  for (const checkbox of checkboxList) {
    if (checkbox.checked) {
      namesList = namesList.filter((name) => name !== checkbox.value)
    }
  }
  renderListHTML(namesList)
}

function emptyList() {
  const message = document.createElement('h2')
  message.textContent = 'No hay más nombres para eliminar'
  document.querySelector('p').remove()
  document.querySelector('#remove').disabled = true
  document.querySelector('#container').append(message)
}

document.addEventListener('DOMContentLoaded', app)
