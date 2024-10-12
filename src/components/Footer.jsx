import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className='p-8 text-center font-bold text-3xl bg-red-200'>Noel Beltran &copy; {year} </footer>
  )
}

export default Footer