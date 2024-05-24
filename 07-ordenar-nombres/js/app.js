let namesList = [
  'Manuel Sadosky',
  'Silvina Ocampo',
  'Alfonsina Storni',
  'Juana Manuela Gorriti',
  'Alejandra Pizarnik',
  'Cora Sadosky'
]

function app() {
  orderByAsc()
  const orderAscButtons = document.querySelector('#order-asc')
  const orderDesButtons = document.querySelector('#order-des')
  orderAscButtons.addEventListener('click', orderByAsc)
  orderDesButtons.addEventListener('click', orderByDes)
}

function orderByAsc(event) {
  document.querySelector('#title').textContent = 'Ordenado de A a la Z'
  document.querySelector('#order-des').disabled = false
  if (event) event.target.disabled = true
  renderListHTML(namesList.sort())
}

function orderByDes(event) {
  document.querySelector('#title').textContent = 'Ordenado de Z a la A'
  document.querySelector('#order-asc').disabled = false
  event.target.disabled = true
  renderListHTML(namesList.sort().reverse())
}

function renderListHTML(names) {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  for (const name of names) container.innerHTML += `<li>${name}</li>`
}

document.addEventListener('DOMContentLoaded', app)
