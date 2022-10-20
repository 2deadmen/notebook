import React ,{useContext,useState}from 'react'
import noteContext from './context/notes/noteContext'


const NoteItem = (props) => {
  const { note ,updateNote} = props;
  const context = useContext(noteContext)
  const {deletenote}=context


  

  return (
    <>
      <div className="card col-md-5 mx-3 my-3 ">
        <div className="card-body">
          <div className="d-grid-1fr ">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <p className="card-text" style={{color:"gray",textDecoration:"underline"}}>{note.tag}</p>
            <i className="fa-solid fa-trash mx-5" onClick={()=>deletenote(note._id)}></i>
            <i className="fa-solid fa-pen-to-square" onClick={()=>updateNote(note)}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
