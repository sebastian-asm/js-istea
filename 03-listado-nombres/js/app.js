const names = []

function app() {
  const addButton = document.querySelector('#add')
  addButton.addEventListener('click', addList)
}

function addList() {
  const inputName = document.querySelector('#name')
  if (!inputName.value) return
  names.push(inputName.value)
  inputName.value = ''
  inputName.focus()
  renderListHTML(names)
}

function renderListHTML(names) {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  for (const name of names) container.innerHTML += `<li>${name}</li>`
}

document.addEventListener('DOMContentLoaded', app)
