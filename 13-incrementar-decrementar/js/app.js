let num = 0

function app() {
  const addButton = document.querySelector('#add')
  const subtractButton = document.querySelector('#subtract')
  const resetButton = document.querySelector('#reset')
  addButton.addEventListener('click', () => renderCounter(1))
  subtractButton.addEventListener('click', () => renderCounter(-1))
  resetButton.addEventListener('click', () => renderCounter())
}

function renderCounter(value) {
  const counter = document.querySelector('#counter')
  if (value > 0) num++
  else if (value < 0) num--
  else num = 0
  counter.textContent = num
}

document.addEventListener('DOMContentLoaded', app)
