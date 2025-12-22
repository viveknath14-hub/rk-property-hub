import { Handshake } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Catagory = () => {
  const factories = [
    { id: 1, src: '/assets/factory1.png', label: 'bathroom' },
    { id: 2, src: '/assets/factory2.png', label: 'bathroom' },
    { id: 3, src: '/assets/factory3.png', label: 'bathroom' }
  ]

  return (
    <div>
      <div className="grid grid-cols-2 gap-20 py-10 bg-stone-50">
        <div className="space-y-6 mx-10 ">
          <div className="py-10">
          <h1 className="text-6xl font-semibold py-5 text-black capitalize">
            Get an industrial space
            <span className='text-[#fdcd02]'> for your business</span>
          </h1>
          <p className="pt-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel soluta praesentium ad a assumenda minus facilis vitae at expedita! Quaerat, ut. Aspernatur repellendus repellat nostrum ex odio ullam id!
          </p>
          </div>
          <div className="grid grid-cols-3 space-y-4 gap-10">
            
            {factories.map((factory) => (
              <div key={factory.id} className="space-y-2 text-center flex flex-col items-center justify-center">
                <Image 
                  src={factory.src} 
                  width={140} 
                  height={140} 
                  alt="catagory image" 

                />
                <h2 className="text-lg pt-3 ">{factory.label}</h2>
              </div>
            ))}
          </div>
        </div>
        
       <div className="relative">
        <div className="flex justify-end mx-20">
        
          <Image src="/assets/factory22.jpg" width={500} height={600} alt="catagory image" 
          className='object-center rounded rounded-t-full bg-gray-300/20 backdrop-blur-sm shadow-md p-4 '/>
          
        </div>
         <div className="absolute right-10 top-80 justify-items-start ">
            <div className="w-56 space-y-4 bg-gray-400/60 p-3 rounded-lg shadow-lg">
              <div className="flex gap-3 items-center bg-white p-2 rounded-lg">
                <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                Industrial space
              </div>
              <div className="flex gap-3 items-center bg-white p-2  rounded-lg">
                <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                Sale,Purchase,Rent
              </div>
              <div className="flex gap-3 items-center bg-white p-2  rounded-lg">
                <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                Lease option
              </div>
              <div className="flex gap-3 items-center bg-white p-2 rounded-lg">
                <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                Paid Partnership
              </div>       
          </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catagory
