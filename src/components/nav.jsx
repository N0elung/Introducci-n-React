import React, { useState } from 'react'

export default function nav() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" }
  ];
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen)
  }
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className='flex justify-between items-center h-16 '>
          <div className="text-2xl font-bold text-primary">Logo</div>
          <ul className='flex gap-6'>
            {links.map((item) => (
              <a className='hover:font-bold cursor-pointer hidden md:block' key={item.href}>
                {item.name}
              </a>
            ))}
          </ul>
          <div className='block md:hidden'>
            <image className='hover:cursor-pointer' onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg></image>
            <div className={`fixed top-0 left-0 h-52 w-full bg-white transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out lg:hidden z-50`}>
              <div className='flex justify-items-center p-4'>
                <image className='hover:cursor-pointer' onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path></svg></image>
              </div>
              <ul className='text-black flex flex-col justify-center items-center gap-6'>
            {links.map((item) => (
              <a className='hover:font-bold cursor-pointer block md:hidden' key={item.href}>
                {item.name}
              </a>
            ))}
          </ul>
            </div>
          </div>
        </div>
            {

            }
      </div>
    </nav>
  )
}