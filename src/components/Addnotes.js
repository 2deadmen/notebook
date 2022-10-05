import React ,{useContext,useState}from 'react'
import noteContext from './context/notes/noteContext'



const Addnotes = () => {
    const context = useContext(noteContext)
    const {addnote}=context

    const [note,setnote]=useState({title:"",description:"",tag:""})
    const handle=(e)=>{
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
    }
    const change=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
    }
  
    return (
    <>
    
    <div className='container my-3'>
    <form className='my-3'>
    <div className="form-group my-3">
        <label htmlFor="inputEmail">Title</label>
        <input type="text" className="form-control" name="title" id="title" onChange={change} placeholder=""/>
    </div>
    <div className="form-group">
        <label htmlFor="inputPassword">Description</label>
        <input type="text" className="form-control"  name="description" onChange={change} id="inputPassword" placeholder=""/>
    </div>
    <div className="form-group">
        <label className="form-check-label my-3"><input type="checkbox" onChange={change}/> tag </label>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handle}>Submit</button>
</form></div></>
  )
}

export default Addnotes