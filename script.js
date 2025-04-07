let notes = ["Arbeit", "Auto", "Wohnung"];

let trashNotes = [];

function renderNotes() {
    let contentRef = document.getElementById('content')
   contentRef.innerHTML = "";


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content')
    trashContentRef.innerHTML = "";


    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}



function getNoteTemplate(indexNote) {
    return `<p>${notes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>` 
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">x</button></p>` 
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote,1)
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}