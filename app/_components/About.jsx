import { Button } from '@headlessui/react'
import { HomeModernIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <>
    <div className='container py-10'>
      <div className="grid grid-cols-2 items-center gap-20">
        <div className=" relative">
          <Image src="/assets/main22.jpg" alt="about" width={500} height={600} className="object-center rounded rounded-t-full bg-gray-300/20 backdrop-blur-sm shadow-md p-4 mx-10 "/>
          <div className="absolute top-5 right-40">
            <div className=" w-32 bg-opacity-20 bg-gray-400/60 rounded-t-full p-2 shadow-md">
              <div className=" w-28 bg-white rounded-t-full shadow-md p-2 ">
                <div className="w-24 bg-[#fdcd02] rounded-t-full p-4">
                  <h1 className="text-xl font-semibold text-center pt-2">Super sale!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 ">
          <h1 className="text-6xl font-semibold py-5 text-black capitalize">
            Purchase for more than a home 
            <span className='text-[#fdcd02]'> This Time</span>
          </h1>
          <p className="pt-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel soluta praesentium ad a assumenda minus facilis vitae at expedita! Quaerat, ut. Aspernatur repellendus repellat nostrum ex odio ullam id!
          </p>
          <div className=" mt-10 ">
            <div className="grid grid-cols-3 gap-10 ">
              <div className="p-4 bg-gray-300/20 backdrop-blur-sm rounded-t-full text-center shadow-md relative">
              
                <Image src="/assets/main_c.jpg" alt="about" width={600} height={400} className='rounded-t-full'/>
                <h1 className='py-2 text-lg'>Buy a home</h1>
                <Button className="bg-[#fdcd02] text-black px-4 py-2 rounded mt-2 hover:bg-yellow-400 size-sm">Contact Us</Button>
                <div className="absolute top-0 right-0 bg-gray-300/20 backdrop-blur-sm p-2 rounded-md">
                <div  className='bg-[#fdcd02] rounded-sm p-2 w-10' >
                  <HomeIcon></HomeIcon>
                </div>
                </div>
              </div>
              <div className="p-4 bg-gray-300/20 backdrop-blur-sm rounded-t-full text-center shadow-md relative">
                <Image src="/assets/home33c.jpg" alt="about" width={600} height={400} className='rounded-t-full'/>
                <h1 className='py-2 text-lg'>Rent a home</h1>
                <Button className="bg-[#fdcd02] text-black px-4 py-2 rounded mt-2 hover:bg-yellow-400 size-sm">Contact Us</Button>
                <div className="absolute top-0 right-0 bg-gray-300/20 backdrop-blur-sm p-2 rounded-md">
                <div  className='bg-[#fdcd02] rounded-sm p-2 w-10' >
                  <HomeIcon></HomeIcon>
                </div>
                </div>
              </div>
              <div className="p-4 bg-gray-300/20 backdrop-blur-sm rounded-t-full text-center shadow-md relative">
                <Image src="/assets/home11.jpg" alt="about" width={600} height={400} className='rounded-t-full'/>
                <h1 className='py-2 text-lg'>Sell a home</h1>
                 <Button className="bg-[#fdcd02] text-black px-4 py-2 rounded mt-2 hover:bg-yellow-400 size-sm">Contact Us</Button>
                <div className="absolute top-0 right-0 bg-gray-300/20 backdrop-blur-sm p-2 rounded-md">
                <div  className='bg-[#fdcd02] rounded-sm p-2 w-10' >
                  <HomeIcon></HomeIcon>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default About