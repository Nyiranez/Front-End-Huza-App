import React from 'react'
import { Contact } from './contact'
import AboutUs from './aboutUs'
import { Home } from './home'

const Homepage = () => {
  return (
    <div>
        <Home/>
        <AboutUs/>
        <Contact/>
    </div>
    
  )
}

export default Homepage