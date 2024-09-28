import React from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
function Vite() {

  const gato = "naranja"

  return (
    <div>
      <Nav />
      <Hero title={gato}/>
    </div>
  )
}

export default Vite