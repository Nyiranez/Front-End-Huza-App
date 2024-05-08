import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signin from './Pages/Components/Signin'
import Signup from './Pages/Components/Signup'
import Internship from './Pages/Internship'
import MakeupDesign from './Pages/MakeupDesign'
import Plainters from './Pages/Plainters'


const App = () => {
  return (
    <div>
       <Router>
        <Routes>
            <Route path='/'element={<Signin/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Internship" element={<Internship/>}/>
            <Route path="/MakeupDesign" element={<MakeupDesign/>}/>
            <Route path="/Plainters" element={<Plainters/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App