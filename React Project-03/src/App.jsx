import { useState } from "react";
import './App.css'
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {

const [notes,setNotes]=useState([]);  


const handleAddNote=(newNote)=>{
  setNotes((prevNotes)=>[...prevNotes,newNote]);
};

const handleDeleteNote=(id)=>{
  const filteredNotes = notes.filter((n)=>n.id!== id );
  setNotes(filteredNotes);

};

const handleCompleteNote = (e)=>{
const noteId= Number(e.target.value);

  //const newNotes = notes.map((note)=>
  //note.id ===  noteId ? {...note,completed: !note,completed}:

 // );
 // setNotes(newNotes);

setNotes(prevNotes)
prevNotes.map((note)=>
note.id ===noteId ? {...note,completed : !note.completed}:n );

};




  return(
    <div className="container">
      <div className="note-header">note header</div>
        <div className="note-app">
        <AddNewNote onAddNote ={handleAddNote} />
    
        <div className="note-container">
          <NoteStatus notes={notes}    />

          <NoteList
            notes={notes}
            onDelete={handleDeleteNote} 
           onComplete={handleCompleteNote}  /> 
          
        </div>
      </div>
    </div>


  );
}


export default App;
