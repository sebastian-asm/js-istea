const users = [
  'Manuel Sadosky',
  'Silvina Ocampo',
  'Alfonsina Storni',
  'Juana Manuela Gorriti',
  'Alejandra Pizarnik',
  'Cora Sadosky'
]

function app() {
  renderListHTML(users)
  const searchInput = document.querySelector('#search')
  const resetSearchButton = document.querySelector('#reset-search')
  searchInput.addEventListener('keyup', search)
  resetSearchButton.addEventListener('click', resetSearch)
}

function renderListHTML(users) {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  for (const user of users) container.innerHTML += `<li>${user}</label>`
}

function search(event) {
  const { value } = event.target
  if (value) {
    const usersFilter = users.filter((user) => user.toLowerCase().includes(value.toLowerCase()))
    if (!usersFilter.length) return messageError(value)
    toggle(false)
    renderListHTML(usersFilter)
  } else {
    resetSearch()
  }
}

function resetSearch() {
  toggle(false)
  const search = document.querySelector('#search')
  search.value = ''
  search.focus()
  renderListHTML(users)
}

function messageError(value) {
  toggle(true)
  document.querySelector('#message-error').textContent = `No existen nombres que contengan: '${value}'`
}

function toggle(active) {
  document.querySelector('#message-error').style.display = active ? 'block' : 'none'
  document.querySelector('#container').style.display = active ? 'none' : 'block'
}

document.addEventListener('DOMContentLoaded', app)
