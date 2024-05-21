import React from 'react'
import AboutUs from './aboutUs'
import { Home } from './home'
import Contact from '../../Pages/Contact'
import Services from '../../Pages/Services'

const Homepage = () => {
  return (
    <div>
        <Home/>
        <AboutUs/>
        <Services/>
        <Contact/>
    
    </div>
    
  )
}

export default Homepage