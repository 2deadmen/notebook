
import React,{useState} from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteState from './components/context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';



const App = () => {
  const [alert, setalert] = useState(null)
  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <>
    <NoteState>
    <Router>
     <Navbar/>
     <Alert alert={alert}/>
     <div className="container">
    <Routes>
      <Route path="/" element={ <Home showalert={showalert} />} />
      <Route path="/about" element={<About/> } />
      <Route path="/Login" element={<Login showalert={showalert}/> } />
      <Route path="/Signup" element={<Signup showalert={showalert}/> } />

      
    </Routes>
    </div>
  </Router>
  </NoteState>  
    </>
  )
}

export default App
