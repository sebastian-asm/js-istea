import { $, getUsers, setUsers } from './utils.js'

function app() {
  $('#add-user').addEventListener('click', addUser)
}

function addUser() {
  let users = getUsers()
  const nameUser = $('#user-name').value
  const debtUser = $('#user-debt').value
  const newId = users.length > 0 ? getNewId() : 1

  if (nameUser.trim() !== '' && debtUser.trim() !== '') {
    users.push({ id: newId, nombre: nameUser, deuda: +debtUser })
    setUsers(users)
    location.href = './index.html'
  }
}

function getNewId() {
  const users = getUsers()
  const ids = users.map((users) => users.id)
  const newId = Math.max(...ids) + 1
  return newId
}

document.addEventListener('DOMContentLoaded', app)
