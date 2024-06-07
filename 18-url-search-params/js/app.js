function app() {
  const sharedButton = document.querySelector('#shared')
  sharedButton.addEventListener('click', saveMessage)
}

function saveMessage() {
  const message = document.querySelector('#message')
  if (message.value.trim() !== '') {
    location.href = `reporte.html?message=${message.value}`
    message.value = ''
  }
}

document.addEventListener('DOMContentLoaded', app)
