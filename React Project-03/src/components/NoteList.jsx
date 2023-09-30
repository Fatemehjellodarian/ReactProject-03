
function NoteList({notes}) {

    
  return (
    <div className="note-list"> NoteList
        {notes.map((notes)=>(
        <NoteItem key={notes.id} note={notes} />


        ))}
  
    </div>
  );
}

export default NoteList;

function NoteItem({note}){

    const options = {
      year:"numeric",
      month:"long",
      day:"numeric",
  
  
    };
  
      return(
          <div className="note-item">
              <div className="note-item__header">
              <div> 
                {}
             <p className="title">{note.title} </p>
              <p className="desc">{note.description} </p>
              
              </div>
              <div className="actions">
                  <button>❌</button>
                  <input type="checkbox"  />
              </div>
  
              </div>
              <div className="note-item__footer">
              {new Date(note.createdAt).toLocaleDateString("en-us",options)}
  
  
              </div>
        
  
              </div>
          
          
  
  
  
  
      );
  }
  

