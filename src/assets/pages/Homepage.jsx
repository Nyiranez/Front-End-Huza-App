import React from 'react'
import AboutUs from './aboutUs'
import { Home } from './home'
import Contact from '../../Pages/Contact'
import Services from '../../Pages/Services'
import GroupTeam from './GroupTeam'

const Homepage = () => {
  return (
    <div>
        <Home/>
        <AboutUs/>
        <Services/>
        {/* <GroupTeam/> */}
        <Contact/>
    
    </div>
    
  )
}

export default Homepage