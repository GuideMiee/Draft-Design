import React from 'react'
import Navbar  from './components/navbar'
import Index from './components/index'
// import AboutUs from './components/aboutUs'
import Project from './components/Project'
import Service from './components/Service'
import Consultation from './components/consultation'
// import Contact from './components/contact'
function App() {
  return (
    <div>
    <Navbar/>
    <Index/>
    <Service/>
    <Consultation/>
    {/* <AboutUs/> */}
    <Project/>

    {/* <Contact/> */}
    </div>
  )
}

export default App
