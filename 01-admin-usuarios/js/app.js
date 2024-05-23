import { users } from './db.js'

function app() {
  renderUserHTML()
  const updateUserButton = document.querySelector('#update-user')
  updateUserButton.addEventListener('click', updateUser)
}

function renderUserHTML() {
  const container = document.querySelector('#container-users')
  container.innerHTML = ''
  for (const user of users) {
    container.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.nombre}</td>
        <td>$${user.deuda}</td>
        <td>
          <button type="button" id="select-user" value="${user.id}">Seleccionar</button>
          <button type="button" id="delete-user" value="${user.id}">Eliminar</button>
        </td>
      </tr>
    `
  }

  const deleteUserButton = document.querySelectorAll('#delete-user')
  const selectUserButton = document.querySelectorAll('#select-user')
  deleteUserButton.forEach((button) => button.addEventListener('click', deleteUser))
  selectUserButton.forEach((button) => button.addEventListener('click', selectUser))
}

function deleteUser(event) {
  const { value } = event.target
  const user = getUser(value)
  if (user.deuda > 0) return
  const indexUser = users.indexOf(user)
  users.splice(indexUser, 1)
  renderUserHTML()
}

function selectUser(event) {
  const { value } = event.target
  const user = getUser(value)
  if (user) {
    document.querySelector('#user-id').textContent = user.id
    document.querySelector('#user-name').value = user.nombre
    document.querySelector('#user-debt').value = user.deuda
  }
}

function updateUser() {
  const idUser = document.querySelector('#user-id').textContent
  const nameUser = document.querySelector('#user-name').value
  const debtUser = document.querySelector('#user-debt').value
  const user = getUser(idUser)
  if (user) {
    user.nombre = nameUser
    user.deuda = debtUser
    renderUserHTML()
  }
}

function getUser(id) {
  const user = users.find((user) => user.id === +id)
  return user
}

// init app
document.addEventListener('DOMContentLoaded', app)
