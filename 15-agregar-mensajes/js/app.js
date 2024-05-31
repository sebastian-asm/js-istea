const messages = []

function app() {
  const message = document.querySelector('#message')
  message.addEventListener('keyup', addToList)
}

function addToList(event) {
  const { target, keyCode } = event
  if (target.value && keyCode === 13) {
    messages.unshift(target.value)
    target.value = ''
    renderListHTML(messages)
  }
}

function renderListHTML(messages) {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  for (const message of messages) container.innerHTML += `<li>${message}</li>`
}

document.addEventListener('DOMContentLoaded', app)
