// script.js
// Obtener los elementos del DOM usando querySelector
const noteInput = document.querySelector("#note-input");
const noteButton = document.querySelector("#note-button");
const noteList = document.querySelector("#note-list");

// Definir un arreglo para almacenar las notas iniciales
const notes = [
  {contenido :"Nota 1"},
  {contenido :"Nota 2"},
  {contenido :"Nota 3"},
  {contenido :"Nota 4"}
  
];


// Método para crear notas
function createNote(noteText) {

  const noteItem = document.createElement("li");
  noteItem.className = "note-item";

  const noteSpan = document.createElement("span");
  noteSpan.textContent = noteText.contenido;
  
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", function() {

    deleteNote(noteItem);
  });
  // Añadir el elemento span y el elemento button al elemento li
  noteItem.appendChild(noteSpan);
  noteItem.appendChild(deleteButton);
  noteList.appendChild(noteItem);
}

function deleteNote(noteItem) {
  // Remover el elemento li del elemento ol
  noteList.removeChild(noteItem);
}

// Recorrer el arreglo notes y crear una nota para cada elemento
for (let noteText of notes) {
  createNote(noteText);
}

// Añadir un evento al botón para crear una nueva nota
noteButton.addEventListener("click", function(event) {
  event.preventDefault();
  const noteText = noteInput.value;
  createNote(noteText);
  noteInput.value = "";
  noteButton.disabled = true;
});

// Añadir un evento al botón cada vez que presione algún digito. Sirve para habilitar/inhabilitar el botón Crear
noteInput.addEventListener("keyup", function() {
  const noteText = noteInput.value;

  if (noteText.trim() == "") {
      noteButton.disabled = true;
  } else {
      noteButton.disabled = false;
  }
});