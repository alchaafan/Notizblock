//notizen anzeigen lassen
let notes = ['Banana', 'Rasen mähen'];

//wann werden sie angezeigt

//wo werden sie angezeigt
function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML= "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>`;
}


function addNote() {
    let noteInputRef = document.getElementById('note-input');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = "";
}

function deleteNote(indexNote) {
    notes.splice(indexNote, 1);
    renderNotes()
}