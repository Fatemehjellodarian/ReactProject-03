
function NoteList({notes,onDelete,onComplete}) {

    
  return (
    <div className="note-list"> NoteList
        {notes.map((notes)=>(
        <NoteItem 

        key={notes.id} 
        note={notes} 
         onDelete={onDelete} 
         onComplete={onComplete} />


        ))}
  
    </div>
  );
}

export default NoteList;

function NoteItem({note,onDelete,onComplete}){

    const options = {
      year:"numeric",
      month:"long",
      day:"numeric",
  
  
    };
  
      return(
          <div className={`note-item ${note.completed ? "completed" : ""}` } >
              <div className="note-item__header">
              <div> 
                {}
             <p className="title">{note.title} </p>
              <p className="desc">{note.description} </p>
              
              </div>
              <div className="actions">
                  <button onClick={ ()=> onDelete(note.id)}  >❌</button>
                  <input

                   type="checkbox"
                   name={note.id}
                    id={note.id}
                     value={note.id}
                     checked={note.Completed}
                      onChange={onComplete}
                       />
              </div>
  
              </div>
              <div className="note-item__footer">
              {new Date(note.createdAt).toLocaleDateString("en-us",options)}
  
  
              </div>
        
  
              </div>
          
          
  
  
  
  
      );
  }
  

