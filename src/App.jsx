import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../src/layout'
import ContextUser from './assets/pages/context';
import { User } from './assets/pages/user'
import { Dashboard } from './assets/pages/dashbord'
import { Users } from './assets/pages/users'
import Team from './assets/pages/team'
import EnhancedTable from './assets/pages/enhancedTable'
import More from './assets/pages/more';

function App() {


  return (

    <>

      <ContextUser>
        <div className='boddy'>
          <BrowserRouter>
            <Routes>

              <Route element={<Layout />} >
                <Route path="/user" element={<User />} />
              </Route>

              <Route path='/' element={<Dashboard></Dashboard>}>
                <Route path='/team' element={<Team />} />
                <Route path='/users' element={<Users />} />
                <Route path='/enhancedTable' element={<EnhancedTable />} />
                <Route path='/more' element={<More />} />

              </Route>

            </Routes>

          </BrowserRouter>

        </div>
      
      </ContextUser>



    </>

  )
}

export default App
