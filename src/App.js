
import React from 'react'
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



const App = () => {
  return (
    <>
    <NoteState>
    <Router>
     <Navbar/>
     
     <div className="container">
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/about" element={<About/> } />
      <Route path="/Login" element={<Login/> } />
      <Route path="/Signup" element={<Signup/> } />

      
    </Routes>
    </div>
  </Router>
  </NoteState>  
    </>
  )
}

export default App
