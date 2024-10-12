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
      <Hero/>
      <About/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Vite