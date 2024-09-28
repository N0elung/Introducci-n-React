import React from 'react'

function hero({title}) {
  return (
    <section className="text-7xl bg-blue-500 md:bg-[#7c4d7c] sm:text-3xl md:text-5xl w-screen h-screen flex justify-center items-center">{title}</section>
  )
}

export default hero