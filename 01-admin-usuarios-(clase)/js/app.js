import { $, $$, setUsers, getUsers } from './utils.js'
import usersDB from './db.js'

function app() {
  const users = getUsers()
  if (!users) setUsers(usersDB)
  renderListHTML()
  $('#order-list').addEventListener('click', orderByName)
}

function renderListHTML() {
  const users = getUsers()
  $('#container-users').innerHTML = ''
  for (const user of users) {
    const { id, nombre, deuda } = user
    $('#container-users').innerHTML += /*html*/ `
      <tr>
        <td>${id}</td>
        <td>${nombre}</td>
        <td>$${deuda}</td>
        <td>
          <button type="button" id="delete-user" value="${id}">Eliminar</button>
          <button type="button" id="select-user" value="${id}">Seleccionar</button>
        </td>
      </tr>
    `
  }

  $$('#delete-user').forEach((button) => button.addEventListener('click', deleteUser))
  $$('#select-user').forEach((button) => button.addEventListener('click', selectUser))
}

function deleteUser(event) {
  let users = getUsers()
  const { value } = event.target
  const user = getUserById(value)
  if (user.deuda === 0) {
    users = users.filter((user) => user.id !== +value)
    setUsers(users)
    renderListHTML()
  }
}

function selectUser(event) {
  const { value } = event.target
  location.href = `./select-user.html?id=${value}`
}

function getUserById(id) {
  const users = getUsers()
  const user = users.find((user) => user.id === +id)
  return user
}

function orderByName() {
  const users = getUsers()
  users.sort((user1, user2) => {
    const name1 = user1.nombre.toLowerCase()
    const name2 = user2.nombre.toLowerCase()
    if (name1 > name2) return 1
    else if (name1 < name2) return -1
    else return 0
  })
  setUsers(users)
  renderListHTML()
}

document.addEventListener('DOMContentLoaded', app)
