import Navbar  from './components/navbar'
import React from 'react'

import Index from './components/index'
// import AboutUs from './components/aboutUs'
// import Project from './components/Project'
import Service from './components/Service'
// import Contact from './components/contact'
function App() {
  return (
    <div>
    <Navbar/>
    <Index/>
    <Service/>
    {/* <AboutUs/>
    <Project/>

    <Contact/> */}
    </div>
  )
}

export default App
