function app() {
  const saveButton = document.querySelector('#save')
  saveButton.addEventListener('click', saveMessage)
}

function saveMessage() {
  const message = document.querySelector('#message')
  const p = document.createElement('p')

  if (message.value.trim() !== '') {
    sessionStorage.setItem('message', message.value)
    p.textContent = 'Mensaje guardado exitosamente'
    p.style.color = 'green'
    message.insertAdjacentElement('afterend', p)
    message.value = ''
    setTimeout(() => p.remove(), 3000)
  }
}

document.addEventListener('DOMContentLoaded', app)
