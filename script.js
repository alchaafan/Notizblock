let notes = ["Arbeit", "Auto", "Wohnung"];

function renderNotes() {
    let contentRef = document.getElementById('content')
   contentRef.innerHTML = "";


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>${notes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>` 
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
}

function deleteNote(indexNote) {
    notes.splice(indexNote,1)
    renderNotes();
}