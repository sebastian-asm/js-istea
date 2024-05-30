function app() {
  renderListHTML()
  const enabledButton = document.querySelector('#enabled')
  enabledButton.addEventListener('click', enabledInputs)
}

function renderListHTML() {
  const container = document.querySelector('#container')
  for (let i = 0; i < 100; i++) {
    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'text'
    input.value = `Mensaje #${i}`
    input.disabled = true
    container.append(input)
  }
}

function enabledInputs() {
  const inputsTexts = document.querySelectorAll('#text')
  inputsTexts.forEach((input) => (input.disabled = false))
}

document.addEventListener('DOMContentLoaded', app)
