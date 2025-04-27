import React from 'react'
import Navbar from './components/Navbar'
import BookingForm from './components/BookingBar'
import JetList from './components/JetList'
import BookingBar from './components/BookingBar'
import BookingPage from './components/BookingPage'
import BookingShow from './BookingShow'
import Hero from './components/Hero'
import Services from './components/Services'
import Membership from './components/Membership'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <div>
    <Routes>

      <Route path="/" element={<Hero/>} />
      <Route path="/services" element={<Services/>}/>
      <Route path="/membership" element={<Membership/>}/>
      <Route path ="/jets" element={<JetList/>}/>
      <Route path='/booking' element={<BookingShow/>}/>
      <Route path="/footer" element={<Footer/>}/>

  

    </Routes>
    </div>
    </>

  )
}

export default App