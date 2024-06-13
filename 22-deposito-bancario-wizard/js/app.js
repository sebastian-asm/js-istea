const KEY = 'client',
  NAME = 'name',
  BANK = 'bank',
  MONEY = 'money',
  CLIENT_INIT = { name: '', bank: '', money: 0 }

function app() {
  const client = getSessionStorage()
  if (!client) setSessionStorage(CLIENT_INIT)
  const input = document.querySelector('input')
  const depositButton = document.querySelector('#deposit')
  if (input) {
    verifyDataClient()
    input.addEventListener('keyup', setDataClient)
  }
  if (depositButton) {
    resumeDataClient()
    depositButton.addEventListener('click', clearDataClient)
  }
}

function verifyDataClient() {
  const client = getSessionStorage()
  const input = document.querySelector('input')
  if (input.id === NAME) input.value = client.name
  if (input.id === BANK) input.value = client.bank
  if (input.id === MONEY) input.value = client.money
}

function setDataClient(event) {
  const { value, id } = event.target
  const client = getSessionStorage()
  if (id === NAME) client.name = value
  if (id === BANK) client.bank = value
  if (id === MONEY) client.money = value
  setSessionStorage(client)
}

function resumeDataClient() {
  const client = getSessionStorage()
  const container = document.querySelector('#container')
  container.textContent = JSON.stringify(client, 0, 2)
}

function clearDataClient() {
  setSessionStorage(CLIENT_INIT)
  location.href = './index.html'
}

function setSessionStorage(value) {
  sessionStorage.setItem(KEY, JSON.stringify(value))
}

function getSessionStorage() {
  return JSON.parse(sessionStorage.getItem(KEY))
}

document.addEventListener('DOMContentLoaded', app)
