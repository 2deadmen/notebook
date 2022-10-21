import React,{useState} from "react";
import NoteContext from "./noteContext";

const  NoteState =(props)=>{
     
  let noteinit=[]
  const host="http://localhost:3001"
      const [notes, setnote] = useState(noteinit)
      //get all notes
      const getnotes= async ()=>{

        const response= await fetch(`${host}/api/notes/fetchallnotes`,
        {
          method:'GET',
          headers:{"auth-token":localStorage.getItem('token')}
        })
        const json=await response.json()
        setnote(json)
      }
      //add note
      
      const addnote= async (title,description,tag)=>{
        const response = await fetch(`http://localhost:3001/api/notes/addnote`, {
          method: 'POST',
          headers: {
            "auth-token": localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, description, tag})
        })
       getnotes()
      
      }


      //delete note
      const deletenote= async (id)=>{
        const response = await fetch(`http://localhost:3001/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            "auth-token": localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          
        })
      
      const newNotes=notes.filter((notes)=>{return notes._id!==id})
       setnote(newNotes)
      }
 
      //update note
      const updatenote= async (id,title,description,tag)=>{
       

          
          const response = await fetch(`http://localhost:3001/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
              "auth-token": localStorage.getItem('token'),
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description, tag})
          })
         getnotes()
        
     
        
       
      }


    return(
        <NoteContext.Provider value={{notes,addnote,deletenote,updatenote,getnotes}}>
            {props.children}

        </NoteContext.Provider>

    )
}
export default NoteState;