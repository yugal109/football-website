import { useState } from 'react'
import "./css/Style.css"
import "./css/responsiv.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import MainLayout from './layouts/MainLayout'
import ContactUs from "./screens/ContactUs"
import AboutUs from './screens/AboutUs';
import Programs from "./screens/Programs"
import TechnicalTeam from './screens/TechnicalTeam'


function App() {
  return (
    <BrowserRouter>
          <Navbar/>
      <Routes>
          {/* <Route  path="/" element={<MainLayout/>}> */}
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route  path="/about-us" element={<AboutUs/>}/>
            <Route  path="/contact-us" element={<ContactUs/>}/>
            <Route  path="/programs" element={<Programs/>}/>
            <Route  path="/technical-team" element={<TechnicalTeam/>}/>
            {/* </Route> */}
      </Routes>
            <Footer/>
    </BrowserRouter>
  )
}

export default App
