import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function Vite() {  
  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <div id="home"><Hero /></div>
      <div id="about"><About/></div>
      <div id="gallery"><Gallery/></div>
      <Footer/>
    </div>
  )
}

export default Vite