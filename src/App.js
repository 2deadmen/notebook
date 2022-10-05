
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
      
    </Routes>
    </div>
  </Router>
  </NoteState>  
    </>
  )
}

export default App
