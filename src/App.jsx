import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../src/layout';
import { Home } from './assets/pages/home';
import { Dashboard } from './assets/pages/dashbord';
import { Users } from './assets/pages/users';
import Team from './assets/pages/team';
import EnhancedTable from './assets/pages/enhancedTable';
import More from './assets/pages/more';
import AboutUs from './assets/pages/aboutUs';
import ContextUser from './assets/pages/context';
import Verify from './Pages/Components/Verify';
import Homepage from './assets/pages/Homepage';
import ResetPassword from './Pages/Components/ResetPassword';
import Brainding from './Pages/Brainding';
import CurnaryArt from './Pages/CurnaryArt';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Signin from './Pages/Components/Signin';
import Signup from './Pages/Components/Signup';
import MakeupDesign from './Pages/MakeupDesign';
import Plainters from './Pages/Plainters';
import ForgetPassword from './Pages/Components/ForgetPassword';
import Profile from "./Pages/Components/Profile";
<<<<<<< HEAD
import AllProfileofSkilled from './Pages/AllProfileofSkilled';
import DetailsForSkilled from './Pages/DetailsForSkilled';
import ProfileForSkilled from './Pages/ProfileForSkilled';
=======
import AllProfileofSkilled from './Pages/AllProfileofSkilled'
import { AdminMore } from '../src/adminMore'
import { Servicecreate } from './assets/pages/servicecreate'

>>>>>>> c7fd9521c3059d1f61ea6783edadde1aad070612

function App() {
  return (
<<<<<<< HEAD
    <ContextUser>
      <div className='boddy'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/layout/aboutUs" element={<AboutUs />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/MakeupDesign" element={<MakeupDesign />} />
              <Route path="/Plainters" element={<Plainters />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/Resetpassword" element={<ResetPassword />} />
              <Route path="/Branding" element={<Brainding />} />
              <Route path="/CurnaryArt" element={<CurnaryArt />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Allprofile" element={<AllProfileofSkilled />} />
              <Route path="/DetailsForSkilled/:Id" element={<DetailsForSkilled />} />
              <Route path='/ProfileForSkilled' element={<ProfileForSkilled/>}/>
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/" element={<Team />} />
              <Route path="/dashboard/team" element={<Team />} />
              <Route path="/dashboard/users" element={<Users />} />
              <Route path="/dashboard/enhancedTable" element={<EnhancedTable />} />
              <Route path="/dashboard/more" element={<More />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ContextUser>
  );
=======

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
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/Branding" element={<Brainding />} />
                <Route path="/CurnaryArt" element={<CurnaryArt />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path='/Allprofile' element={<AllProfileofSkilled />} />
              </Route>
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='' element={<Team />} />
                <Route path='team' element={<Team />} />
                <Route path='users' element={<Users />} />

                <Route path='services' element={<More />} />
                <Route path='enhancedTable' element={<EnhancedTable />} />

                  <Route path='enhancedTable/adminMore/:Id' element={<AdminMore />} />
                  <Route path='services/addservice' element={<Servicecreate />} />
                
              </Route>


            </Routes>

          </BrowserRouter>

        </div>

      </ContextUser>



    </>

  )
>>>>>>> c7fd9521c3059d1f61ea6783edadde1aad070612
}

export default App;