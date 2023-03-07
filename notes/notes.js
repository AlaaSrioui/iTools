var notes = []   // array to push the added notes inside it
function addNote() {    // function create a new value in the noteInpute and push it in the previous array
  var noteInput = document.getElementById("noteInput").value
  notes.push(noteInput) 
  displayNotes()
}
function deleteLastNote() {    // function to delete the last note added in the array of notes
  notes.pop()
  displayNotes()
}
function deleteFirstNote() {    // function to delete the last note added in the array of notes
    notes.shift()
    displayNotes()
  }
function displayNotes() {           // function to add notes
  var notesList = document.getElementById("notesList")  // first we assing the tag "li" in a variable
      notesList.innerHTML = ""
  for (var i = 0; i < notes.length; i++) {  // then we create a for loop to loop over the array of notes 
    var note = notes[i]
    var li = document.createElement("li")  // evry element in the tag ogf li will appended in the the tag 
    li.textContent = note
    notesList.append(li)
  }
}
