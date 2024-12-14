import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Events from './Event/Events'
import Talents from './Talents/Talents'
import Contacts from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/events' element={<Events/>}/>
    <Route path='/talents' element={<Talents/>}/>
    <Route path='/contact' element={<Contacts/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
