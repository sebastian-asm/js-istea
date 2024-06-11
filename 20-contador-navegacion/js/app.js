const KEY = 'counter'

function app() {
  let counterSession = getCounter()
  counterSession = counterSession ? counterSession : 0
  counterSession++
  setCounter(counterSession)
  showCounterHTML()
}

function showCounterHTML() {
  const counter = document.querySelector('#counter')
  counter.textContent = getCounter()
}

function setCounter(value) {
  sessionStorage.setItem(KEY, JSON.stringify(value))
}

function getCounter() {
  return JSON.parse(sessionStorage.getItem(KEY))
}

document.addEventListener('DOMContentLoaded', app)
