import { verifyStorage, getUsers } from './db.js'

function app() {
  verifyStorage()
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
        </tr>
      `
    }
  }
}

document.addEventListener('DOMContentLoaded', app)
