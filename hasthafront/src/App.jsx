import React from 'react'
import {Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import Dashboard from './pages/dashboard'
import Resdetails from './pages/details/resdetails'
import Comdetails from './pages/details/comdetails'
import Hosdetails from './pages/details/hosdetails.jsx'
import Edudetails from './pages/details/edudetails.jsx'
import Inddetails from './pages/details/inddetails.jsx'
import Resfilter from './pages/filters/resfilter.jsx'

function App(){
  return (
    <div>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/dashboard' element={< Dashboard/>}/>
          <Route path='/hosdetails' element={<Hosdetails/>}/>
          <Route path='/resdetails' element={<Resdetails/>}/>
          <Route path='/comdetails' element={<Comdetails/>}/>
          <Route path='/edudetails' element={<Edudetails/>}/>
          <Route path='/inddetails' element={<Inddetails/>}/>
          <Route path='/resfilter' element={<Resfilter/>}/>
        </Routes>
    </div>
  )
}

export default App