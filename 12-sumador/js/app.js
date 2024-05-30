function app() {
  const sumButton = document.querySelector('#sum')
  sumButton.addEventListener('click', sum)
}

function sum() {
  const numberA = +document.querySelector('#numberA').value
  const numberB = +document.querySelector('#numberB').value
  const result = document.querySelector('#result')
  if (numberA && numberB) result.textContent = numberA + numberB
}

document.addEventListener('DOMContentLoaded', app)
