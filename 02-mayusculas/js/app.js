function app() {
  const convertButton = document.querySelector('#convert')
  convertButton.addEventListener('click', convertToUpper)
}

function convertToUpper() {
  const inputText = document.querySelector('#text')
  const errorMessage = document.querySelector('#error-message')
  const result = document.querySelector('#result')
  const container = document.querySelector('#container')

  if (!inputText.value) {
    errorMessage.style.display = 'block'
    container.style.display = 'none'
    return
  }

  errorMessage.style.display = 'none'
  container.style.display = 'block'
  result.textContent = inputText.value.toUpperCase()
  inputText.value = ''
  inputText.focus()
}

document.addEventListener('DOMContentLoaded', app)
