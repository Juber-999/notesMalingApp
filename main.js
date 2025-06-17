function getNotes() {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
  }
  
  function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  
  function addNote() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
  
    if (title === "" || content === "") {
      alert("Please enter both title and content");
      return;
    }
  
    const notes = getNotes();
    notes.push({ title, content }); 
    saveNotes(notes);
  
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    displayNotes();
  }
  
  function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
    displayNotes();
  }
  
  function displayNotes() {
    const notesContainer = document.getElementById("notes-container");
    const notes = getNotes();
    notesContainer.innerHTML = "";
  
    notes.forEach((note, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <button onclick="deleteNote(${index})">Delete</button>
      `;
      notesContainer.appendChild(noteDiv);
    });
  }
  