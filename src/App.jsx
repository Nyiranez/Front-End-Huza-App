import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../src/layout';
import { Home } from './assets/pages/home';
import { Dashboard } from './assets/pages/dashbord';
import { Users } from './assets/pages/users';
import Team from './assets/pages/team';
import EnhancedTable from './assets/pages/enhancedTable';
import Message from './assets/pages/messages';
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
import AllProfileofSkilled from './Pages/AllProfileofSkilled';
import DetailsForSkilled from './Pages/DetailsForSkilled';
import ProfileForSkilled from './Pages/ProfileForSkilled';
import { AdminMore } from '../src/adminMore'
import { Servicecreate } from './assets/pages/servicecreate'
import { Update } from './assets/pages/serviceupdate';
<<<<<<< HEAD
import EditProfile from './Pages/Components/editProfile';
import PrivateRoute from './Pages/Components/PrivateRoute';
import Client from './assets/pages/client';
=======
import Booking from './Pages/Components/Booking';
import GroupTeam from './assets/pages/GroupTeam';
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1

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
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
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
                {/* <Route path="/Profile" element={<Profile />} /> */}
                <Route path='/Allprofile' element={<AllProfileofSkilled />} />
                <Route path="/DetailsForSkilled/:Id" element={<DetailsForSkilled />} />
                <Route path='/ProfileForSkilled' element={<ProfileForSkilled />} />
<<<<<<< HEAD
                <Route path='/editProfile' element={<EditProfile />} />
=======
                <Route path='/Booking' element={<Booking/>}/>
                <Route path='/GroupTeam' element={<GroupTeam/>}/>
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1
              </Route>
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='' element={<Team />} />
                <Route path='team' element={<Team />} />
                <Route path='users' element={<Users />} />
                <Route path='services' element={<More />} />
                <Route path='enhancedTable' element={<EnhancedTable />} />
                <Route path='enhancedTable/adminMore/:Id' element={<AdminMore />} />
                <Route path='services/addservice' element={<Servicecreate />} />
                <Route path='services/updateservice/:proId' element={<Update />} />
<<<<<<< HEAD
                <Route path='message' element={<Message />} />
                <Route path='client' element={<Client />} />
=======
                
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ContextUser>
    </>
  )
}

export default App;
