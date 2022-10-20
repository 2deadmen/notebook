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
          headers:{"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYmY5ZDI3MjdmZWNmOTViODY3NzdlIn0sImlhdCI6MTY2NDg3NTA0NX0.ddyx0I6a7Nf3A1tf3AN8iaIW3kjUxF72vEUsji0KySk"}
        })
        const json=await response.json()
        setnote(json)
      }
      //add note
      
      const addnote= async (title,description,tag)=>{
        const response = await fetch(`http://localhost:3001/api/notes/addnote`, {
          method: 'POST',
          headers: {
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYmY5ZDI3MjdmZWNmOTViODY3NzdlIn0sImlhdCI6MTY2NDg5OTc3OX0.u8bqbw1DKjlVSFbcJ_FyUQEbB7kP5o2seJNKpV-90Vw",
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
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYmY5ZDI3MjdmZWNmOTViODY3NzdlIn0sImlhdCI6MTY2NDg5OTc3OX0.u8bqbw1DKjlVSFbcJ_FyUQEbB7kP5o2seJNKpV-90Vw",
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
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYmY5ZDI3MjdmZWNmOTViODY3NzdlIn0sImlhdCI6MTY2NDg5OTc3OX0.u8bqbw1DKjlVSFbcJ_FyUQEbB7kP5o2seJNKpV-90Vw",
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