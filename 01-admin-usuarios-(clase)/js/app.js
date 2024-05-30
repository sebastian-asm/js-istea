import { users } from './db.js'

const $ = (selectorName) => document.querySelector(selectorName)
const $$ = (selectorName) => document.querySelectorAll(selectorName)

function app() {
  renderListHTML()
  buttonsAction()
}

function renderListHTML() {
  $('#container-users').innerHTML = ''
  for (const user of users) {
    const { id, nombre, deuda } = user
    $('#container-users').innerHTML += /*html*/ `
      <tr>
        <td>${id}</td>
        <td>${nombre}</td>
        <td>$${deuda}</td>
        <td>
          <button type="button" id="select-user" value="${id}">Seleccionar</button>
          <button type="button" id="delete-user" value="${id}">Eliminar</button>
        </td>
      </tr>
    `
  }

  $$('#delete-user').forEach((button) => button.addEventListener('click', deleteUser))
  $$('#select-user').forEach((button) => button.addEventListener('click', selectUser))
}

function buttonsAction() {
  $('#update-user').addEventListener('click', updateUser)
  $('#add-user').addEventListener('click', addUser)
  $('#cancel-update').addEventListener('click', cancelUpdate)
  $('#order-list').addEventListener('click', orderByName)
}

function deleteUser(event) {
  const { value } = event.target
  const user = getUser(value)
  if (user.deuda === 0) {
    const indexUser = users.indexOf(user)
    users.splice(indexUser, 1)
    renderListHTML()
  }
}

function selectUser(event) {
  const { value } = event.target
  const user = getUser(value)
  if (user) {
    editionMode(true)
    $('#user-id').textContent = user.id
    $('#user-name').value = user.nombre
    $('#user-debt').value = user.deuda
  }
}

function updateUser() {
  const idUser = $('#user-id').textContent
  const user = getUser(idUser)
  if (user) {
    user.nombre = $('#user-name').value
    user.deuda = +$('#user-debt').value
    editionMode(false)
    renderListHTML()
    clearForm()
  }
}

function addUser() {
  const nameUser = $('#user-name').value
  const debtUser = $('#user-debt').value
  const newId = users.length > 0 ? getNewId() : 1
  if (nameUser.trim() !== '' && debtUser.trim() !== '') {
    users.push({ id: newId, nombre: nameUser, deuda: +debtUser })
    renderListHTML()
    clearForm()
  }
}

function getUser(id) {
  const user = users.find((user) => user.id === +id)
  return user
}

function getNewId() {
  const ids = users.map((users) => users.id)
  const newId = Math.max(...ids) + 1
  return newId
}

function cancelUpdate() {
  clearForm()
  editionMode(false)
}

function orderByName() {
  users.sort((user1, user2) => {
    const name1 = user1.nombre.toLowerCase()
    const name2 = user2.nombre.toLowerCase()
    if (name1 > name2) return 1
    else if (name1 < name2) return -1
    else return 0
  })
  renderListHTML()
}

function clearForm() {
  $('#user-id').textContent = ''
  $('#user-name').value = ''
  $('#user-debt').value = ''
}

function editionMode(active) {
  $('#update-user').disabled = !active
  $('#cancel-update').disabled = !active
  $('#add-user').disabled = active
}

// init app
document.addEventListener('DOMContentLoaded', app)
