import { getUsers, setUsers } from './db.js'

function init() {
  renderListHTML()
}

function renderListHTML() {
  const users = getUsers()
  const container = document.querySelector('#container')
  container.innerHTML = ''

  if (users) {
    for (const user of users) {
      container.innerHTML += /*html*/ `
        <tr>
          <td>${user}</td>
          <td>
            <button id="delete" value="${user}">Eliminar</button>
          </td>
        </tr>
      `
    }

    const deleteButtons = document.querySelectorAll('#delete')
    for (const button of deleteButtons) button.addEventListener('click', deleteUser)
  }
}

function deleteUser(event) {
  const { value } = event.target
  const users = getUsers()
  const usersFilter = users.filter((user) => user !== value)
  setUsers(usersFilter)
  renderListHTML()
}

document.addEventListener('DOMContentLoaded', init)
