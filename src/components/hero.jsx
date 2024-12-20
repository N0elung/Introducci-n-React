import React from 'react'

function hero() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-no-repeat' id='home' 
      style={{ 
      backgroundImage: `url("gatoPistola.jpg")`, 
      backgroundPosition: 'center',
      backgroundSize: 'cover', 
      }}>
      <div className='font-bold grid items-center'>
        <h1 className='text-red-600 p-8 text-7xl md:text-8xl font-mono flex justify-center items-center text-center'>Arriba las manos</h1>
        <p className='text-red-400 p-8 text-3xl md:text-4xl flex justify-center text-center'>Vengo a robarle el corazón (Y la cartera)</p>
      </div>
    </div>
  )
}

export default hero