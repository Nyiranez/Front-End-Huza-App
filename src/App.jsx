import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../src/layout'

import { Home } from './assets/pages/home'
import { User } from './assets/pages/user'
import { Dashboard } from './assets/pages/dashbord'
import { Users } from './assets/pages/users'
import Team from './assets/pages/team'
import EnhancedTable from './assets/pages/enhancedTable'
import More from './assets/pages/more';
import AboutUs from './assets/pages/aboutUs'
import ContextUser from './assets/pages/context';
import Verify from './Pages/Components/Verify'
import Homepage from './assets/pages/Homepage'
import ResetPassword from './Pages/Components/ResetPassword'
import Brainding from './Pages/Brainding'
import CurnaryArt from './Pages/CurnaryArt'
import Contact from './Pages/Contact'
import Register from './Pages/Components/Register'
import Services from './Pages/Services'
import Signin from './Pages/Components/Signin'
import Signup from './Pages/Components/Signup'
import MakeupDesign from './Pages/MakeupDesign'
import Plainters from './Pages/Plainters'
import ForgetPassword from './Pages/Components/ForgetPassword'

function App() {


  return (

    <>

      <ContextUser>
        <div className='boddy'>
          <BrowserRouter>
            <Routes>



              <Route path="/" element={<Layout />} >
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Home />} />
                <Route path="layout/aboutUs" element={<AboutUs />} />
                <Route path='/Signin' element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/MakeupDesign" element={<MakeupDesign />} />
                <Route path="/Plainters" element={<Plainters />} />
                <Route path="/ForgetPassword" element={<ForgetPassword />} />
                <Route path="/verify" element={<Verify />} />
                <Route path='/resetPassword' element={<ResetPassword />} />
                <Route path='/Branding' element={<Brainding />} />
                <Route path='/CurnaryArt' element={<CurnaryArt />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/Services' element={<Services />} />
                <Route path="/user" element={<User />} />
              </Route>
              <Route path='/dashboard' element={<Dashboard></Dashboard>}>
                <Route path='dashboard/team' element={<Team />} />
                <Route path='dashboard/users' element={<Users />} />
                <Route path='dashboard/enhancedTable' element={<EnhancedTable />} />
                {/* <Route path='/more' element={<More />} /> */}

              </Route>


            </Routes>

          </BrowserRouter>

        </div>

      </ContextUser>



    </>

  )
}

export default App
