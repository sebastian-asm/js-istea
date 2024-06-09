export const users = [
  'Manuel Sadosky',
  'Silvina Ocampo',
  'Alfonsina Storni',
  'Juana Manuela Gorriti',
  'Alejandra Pizarnik',
  'Cora Sadosky'
]

export function verifyStorage() {
  const usersStorage = getUsers()
  if (!usersStorage) setUsers(users)
  else setUsers(usersStorage)
}

export function getUsers() {
  const usersStorage = JSON.parse(sessionStorage.getItem('users'))
  return usersStorage
}

export function setUsers(users) {
  if (users) sessionStorage.setItem('users', JSON.stringify(users))
}
