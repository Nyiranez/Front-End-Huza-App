
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../src/layout'

import { Home } from './assets/pages/home'
import { Contact } from './assets/pages/contact'
import { Services } from './assets/pages/services'
import { AboutUs } from './assets/pages/aboutUs'
import { Footer } from './assets/pages/footer'
function App() {


  return (
    <>
      <div className='boddy'>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="layout/contact" element={<Contact />} />
              <Route path="layout/services" element={<Services />} />
              <Route path="layout/aboutUs" element={<AboutUs />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
      <div className='h-24'>
        <Footer />
      </div>

    </>
  )
}

export default App
