import React ,{useContext,useEffect}from 'react'
import noteContext from './context/notes/noteContext'
import NoteItem from './NoteItem'


const Notes = () => {
    const context = useContext(noteContext)
    const {note,getnotes}=context
    useEffect(() => {
      getnotes()
    }, [])
    
  return (
    <div className='row'>


<div><h2>your notes</h2></div>
    {note.map((note)=>{
        return  <NoteItem key={note.date} note={note}/>  
    }

    )}
    </div>
  )
}

export default Notes