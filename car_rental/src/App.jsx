
import React, { Fragment } from 'react'

import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Routers from '../src/routers/Routers'
import Body from '../src/components/Body/Body'
import HeroSlider from '../src/components/UI/HeroSlider'
import PreBody from './components/Body/PreBody'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return <div>
    <Header />
    <PreBody/>
    <Body/>
   <Footer/>
   </div>
}

export default App