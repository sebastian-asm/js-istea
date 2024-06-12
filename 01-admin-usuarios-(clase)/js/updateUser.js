import { $, getUsers, setUsers } from './utils.js'

function app() {
  const userId = new URLSearchParams(location.search).get('id')
  if (userId) {
    renderUserHTML(userId)
    $('#update-user').addEventListener('click', () => updateUser(userId))
  }
}

function renderUserHTML(id) {
  const users = getUsers()
  const user = users.find((user) => user.id === +id)
  const { nombre, deuda } = user
  $('#user-id').textContent = id
  $('#user-name').value = nombre
  $('#user-debt').value = deuda
}

function updateUser(id) {
  const users = getUsers()
  const user = users.find((user) => user.id === +id)
  if (user) {
    user.nombre = $('#user-name').value
    user.deuda = +$('#user-debt').value
    setUsers(users)
    location.href = './index.html'
  }
}

document.addEventListener('DOMContentLoaded', app)
