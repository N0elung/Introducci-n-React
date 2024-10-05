import React, { useState } from 'react';

function Hero() {
  const [count, setCount] = useState(0);
  let [name, setName] = useState("kevin")
  console.log(name)
  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Increment count by 1
  };

  return (
    <section className="flex justify-center items-center flex-col h-screen">
      {name == "juan" ? (
        <p className='text-red-500'>eres juan</p>
      ) : (
        <p className='text-green-500'>IMPOSTOR</p>
      )}

    </section>
  );
}

export default Hero;
