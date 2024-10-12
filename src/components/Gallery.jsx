import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

function Gallery2() {
    const gatos = [
      "https://img.freepik.com/foto-gratis/cerrar-lindo-gato-interior_23-2148882585.jpg?semt=ais_hybrid",
      "https://greentology.life/wp-content/uploads/2023/11/gatos_adorable-gatito-gafas-sol.jpg",
      "https://www.ngenespanol.com/wp-content/uploads/2024/02/estas-son-las-razas-de-gatos-que-viven-mas.jpg",
      "https://purina.com.mx/sites/default/files/styles/webp/public/2022-10/purina-10-datos-curiosos-sobre-los-gatos.png.webp?itok=D7RZ4o6C",
      "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Siberian20Forest.2.jpg?itok=EKzt0Ezs",
      "https://www.elsoldemexico.com.mx/doble-via/ciencia/rj81mb-gatos/ALTERNATES/LANDSCAPE_1140/gatos",
      "https://www.clinicanimal.vet/wp-content/uploads/2024/01/gato-bostezando.jpg",
      "https://www.zooplus.es/magazine/wp-content/uploads/2022/02/Gatos-de-exterior.jpeg"
    ];
    return (
        <div className='grid gap-10 justify-center items-center p-8'>
            <div className='justify-center items-center flex'>
                <h1 className='text-red-600 text-6xl font-mono font-semibold'>Beware! Cool cats below</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 md:gap-x-32 gap-y-16'>               
                {gatos.map ((gato, index) =>
                    <Gallery key={index}>
                        <Item
                            original={gato}
                            thumbnail={gato}
                            width="1024"
                            height="768"
                        >
                            {({ ref, open }) => (
                            <img className='w-64 h-64 hover:transition-transform duration-300 ease-in-out border border-black rounded-2xl' ref={ref} onClick={open} src={gato}/>
                            )}
                        </Item>
                    </Gallery>
                )}
            </div>
        </div>
    )
}

export default Gallery2
