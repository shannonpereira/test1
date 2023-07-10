import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Course from './Components/Course'
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
function App(){
  return(
    <>
   <BrowserRouter>
   <Navbar />
   
   <Routes>
    <Route path="/"element={<Home />}></Route>
    <Route path="/about"element={<About />}></Route>
    <Route path="/courses" element={<Course />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
