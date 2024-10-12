import React, { useState } from 'react'

export default function nav() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" }
  ];
  const [menu, setMenu] = useState(false);

  const Burguer = () => {
      setMenu(menu => !menu)
    }
  

  return (
    <nav className="bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className='flex justify-between items-center h-16'>
          <div className="text-2xl font-bold text-primary">Logo</div>
          <ul className='flex gap-6'>
            {links.map((item) => (
              <a className='hover:font-bold cursor-pointer hidden md:block' key={item.href}>
                {item.name}
              </a>
            ))}
          </ul>
          <div className='hover:cursor-pointer block md:hidden'>
            <button onClick={Burguer}><svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg></button>
          </div>
        </div>
            {

            }
      </div>
    </nav>
  )
}