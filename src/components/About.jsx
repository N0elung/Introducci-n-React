import React from 'react'

function About() {
  return (
    <div className='grid grid-cols-1 p-10 md:grid-cols-2 items-center justify-evenly gap-16 container md:py-10 mx-auto'>
        <div className='text-wrap flex flex-col text-xl md:text-2xl'>
            <h1 className='font-bold flex'>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nam facilis nulla distinctio, iusto ullam blanditiis impedit, architecto atque eligendi beatae ab fugiat, ipsa vitae a temporibus. Ex ipsum deleniti, nam saepe ad debitis nisi pariatur ea asperiores nobis hic quasi enim ipsa eos delectus error. Sapiente atque fugit veritatis.</p>
        </div>
        <div className='flex justify-center items-center'>
            <img className='object-cover hover:scale-110 transition-transform duration-300 ease-in-out border border-neutral-950 rounded-2xl' src="https://picsum.photos/400/500"/>
        </div>

    </div>
  )
}

export default About