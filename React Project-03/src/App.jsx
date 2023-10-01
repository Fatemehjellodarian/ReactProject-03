import { useState } from "react";
import './App.css'
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";





function App() {

  
  const [sortBy,setSortBy] = useState("latest");





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
  const newNotes = notes.map((note)=>
  note.id ===  noteId ? {...note,completed: !note.completed}:note

 );
  setNotes(newNotes);

};




  return(
    <div className="container">
      <NoteHeader 
       notes={notes} 
       sortBy={sortBy}
       onSort={(e)=>setSortBy(e.target.value)}
       
       />
      <div className="note-header">note header</div>
        <div className="note-app">
        <AddNewNote onAddNote ={handleAddNote} />
    
        <div className="note-container">
          <NoteStatus notes={notes}    />

          <NoteList
          sortBy={sortBy}
            notes={notes}
            onDelete={handleDeleteNote} 
           onComplete={handleCompleteNote}  /> 
          
        </div>
      </div>
    </div>


  );
}


export default App;
