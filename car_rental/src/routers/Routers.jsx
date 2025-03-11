

import React from 'react'
import { Routes, Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Cars from '../pages/CarList/Cars'
import CarDetails from '../pages/CarDetails'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { BrowserRouter as Router} from 'react-router-dom'

const Routers = () => {
  return 
  <Router>
  <Routes>
    <Route index element={<Home />} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/cars' element={<Cars/>} />
    <Route path='/cars/:slug' element={<CarDetails/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/register' element={<Resister/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/*' element={<NotFound/>} />
  </Routes>
  </Router>
  
  
 
    
  
}

export default Routers
