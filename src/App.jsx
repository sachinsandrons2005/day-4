import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clas from './component/Clas.jsx'
import Home from './component/Home.jsx'
import Foot from './component/Foot.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Services from './component/pages/Services.jsx'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from './component/pages/NavBar.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/Contact"element={<Contact/>}/>
      <Route path="/Services"element={<Services/>}/>
      </Routes>    
    </BrowserRouter>
      <Foot/>
    </>
  )
}

export default App
