const options = [
  { title: 'Administrador de usuarios', path: './01-admin-usuarios/index.html' },
  { title: 'Convertir a mayúsculas', path: './02-mayusculas/index.html' },
  { title: 'Agregar nombres a listado', path: './03-listado-nombres/index.html' },
  { title: 'Eliminar nombres de listado (botón)', path: './04-eliminar-nombres-button/index.html' },
  { title: 'Eliminar nombres de listado (checkbox)', path: './05-eliminar-nombres-checkbox/index.html' },
  { title: 'Duplicar nombres', path: './06-duplicar-nombres/index.html' },
  { title: 'Ordenar nombres (ascendente y descendente)', path: './07-ordenar-nombres/index.html' },
  { title: 'Pasar a mayúsculas/minúsculas', path: './08-mayusculas-minusculas/index.html' },
  { title: 'Seleccionar solo un nombre', path: './09-seleccionar-un-nombre/index.html' }
]

function app() {
  const d = document
  const container = d.querySelector('#container')

  for (const option of options) {
    const { title, path } = option
    const li = d.createElement('li')
    const a = d.createElement('a')
    a.textContent = title
    a.href = path
    li.append(a)
    container.append(li)
  }
}

document.addEventListener('DOMContentLoaded', app)
