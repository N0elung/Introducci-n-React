import React from 'react'

export default function nav() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" }
  ];

  return (
    <nav className="bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className='flex justify-between items-center h-16'>
          <div className="text-2xl font-bold text-primary">Logo</div>
          <ul className='flex gap-6'>
            {links.map((item) => (
              <a key={item.href}>
                {item.name}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}