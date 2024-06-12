const options = [
  { title: 'Administrador de usuarios (clases en vivo)', path: './01-admin-usuarios-(clase)/index.html' },
  { title: 'Convertir a mayúsculas', path: './02-mayusculas/index.html' },
  { title: 'Agregar nombres a listado', path: './03-listado-nombres/index.html' },
  { title: 'Eliminar nombres de listado (botón)', path: './04-eliminar-nombres-button/index.html' },
  { title: 'Eliminar nombres de listado (checkbox)', path: './05-eliminar-nombres-checkbox/index.html' },
  { title: 'Duplicar nombres', path: './06-duplicar-nombres/index.html' },
  { title: 'Ordenar nombres (ascendente y descendente)', path: './07-ordenar-nombres/index.html' },
  { title: 'Pasar a mayúsculas o minúsculas', path: './08-mayusculas-minusculas/index.html' },
  { title: 'Seleccionar solo un nombre', path: './09-seleccionar-un-nombre/index.html' },
  { title: 'Habilita o deshabilita caja de texto', path: './10-habilita-deshabilita-texto/index.html' },
  { title: 'Habilitar 100 inputs de textos', path: './11-habilitar-100-inputs/index.html' },
  { title: 'Sumar 2 números', path: './12-sumador/index.html' },
  { title: 'Incrementar o decrementar un número', path: './13-incrementar-decrementar/index.html' },
  { title: 'Buscar nombre en listado', path: './14-buscar-nombre/index.html' },
  { title: 'Agregar mensajes a una lista', path: './15-agregar-mensajes/index.html' },
  { title: 'Lista desplegable', path: './16-lista-desplegable/index.html' },
  { title: 'Session Storage', path: './17-session-storage/index.html' },
  { title: 'URL Search Params', path: './18-url-search-params/index.html' },
  { title: 'Session Storage (listado)', path: './19-session-storage-listado/index.html' },
  { title: 'Contador de navegaciones', path: './20-contador-navegacion/index.html' },
  { title: 'Modo oscuro o claro', path: './21-modo-oscuro-claro/index.html' }
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
