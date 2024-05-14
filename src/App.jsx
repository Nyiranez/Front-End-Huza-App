import React from 'react'
import Signin from './Pages/Components/Signin'
import Signup from './Pages/Components/Signup'
import MakeupDesign from './Pages/MakeupDesign'
import Plainters from './Pages/Plainters'
import ForgetPassword from './Pages/Components/ForgetPassword'


import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../src/layout'
import { Home } from './assets/pages/home'
import { Contact } from './assets/pages/contact'
import  AboutUs  from './assets/pages/aboutUs'
import { Footer } from './assets/pages/footer'
import ContextUser from './assets/pages/context';
import Verify from './Pages/Components/Verify'
import Homepage from './assets/pages/Homepage'
import ResetPassword from './Pages/Components/ResetPassword'
import Brainding from './Pages/Brainding'
import CurnaryArt from './Pages/CurnaryArt'
function App() {


  return (

    <>

      <ContextUser>
        <div className='boddy'>
          <BrowserRouter>
            <Routes>

              <Route path="/" element={<Layout />} >
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Home/>} />
                <Route path="layout/contact" element={<Contact />} />
                <Route path="layout/aboutUs" element={<AboutUs />} />
                <Route path='/Signin' element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/MakeupDesign" element={<MakeupDesign />} />
                <Route path="/Plainters" element={<Plainters />} />
                <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
                <Route path="/verify" element={<Verify/>}/>
                <Route path='/resetPassword' element={<ResetPassword/>}/>
                <Route path='/Branding' element={<Brainding/>}/>
                <Route path='/CurnaryArt' element={<CurnaryArt/>}/>
                </Route>

            </Routes>
            
          </BrowserRouter>
       
        </div>
        <div className='h-24'>
          <Footer />
        </div>
      </ContextUser>



    </>

  )
}

export default App
