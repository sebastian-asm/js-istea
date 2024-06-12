export const $ = (selectorName) => document.querySelector(selectorName)
export const $$ = (selectorName) => document.querySelectorAll(selectorName)
const USERS = 'users'

export function setUsers(value) {
  sessionStorage.setItem(USERS, JSON.stringify(value))
}

export function getUsers() {
  return JSON.parse(sessionStorage.getItem(USERS))
}
