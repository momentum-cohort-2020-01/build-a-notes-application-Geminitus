/* global fetch moment */
function q (selector) {
  return document.querySelector(selector)
}

let form = q('#new-notes')

function getAllNotes () {
  return fetch('http://localhost:3000/notes/', {
    method: 'GET'
  })
    .then(response => response.json())
}

function clearPage () {
  let page = q('#notes-body')
  page.innerHTML = ''
  return
}

function renderNotes (notes) {
  let noteString = '<ul>'
  for (const note of notes) {
    noteString += '<h2>' + note.title + '</h2>' + '<li>' + note.body + '</li>'
  }
  noteString += '</ul>'
  return noteString
}

// form.addEventListener('submit', function (e) {
//   e.preventDefault()
//   const newNote = q('#add-notes')
//   const newNoteValue = newNote.value
//   const noteText = 'title : example 2' 'body : ' + newNoteValue
// function postNewNote (noteText) {
//   return fetch('http://localhost:3000/notes/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ noteText })
//   })
// }
//  .then(clearPage)
//  .then(renderNotes)
// }
// )

getAllNotes() 
  .then(notes => renderNotes(notes))
  .then(html => {
    const notesSection = document.querySelector('#notes-body')
    notesSection.innerHTML = html
  })

