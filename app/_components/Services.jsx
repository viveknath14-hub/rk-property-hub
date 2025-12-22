import { Button } from '@headlessui/react'
import { HomeModernIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div>
        <div className='container py-10'>
              <div className="grid grid-cols-2 items-center gap-20">
                <div className=" relative">
                  <Image src="/assets/Plot11.jpg" alt="about" width={500} height={600} className="object-center rounded rounded-t-full bg-gray-300/20 backdrop-blur-sm shadow-md p-4 mx-10 "/>
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
                    Get a plot for your 
                    <span className='text-[#fdcd02]'> Dream Home</span>
                  </h1>
                  <p className="pt-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel soluta praesentium ad a assumenda minus facilis vitae at expedita! Quaerat, ut. Aspernatur repellendus repellat nostrum ex odio ullam id!
                  </p>
                  <div className=" mt-10 ">
                    <div className="grid grid-cols-9 gap-2 ">
                     <div className="col-span-2  flex justify-center items-start my-10 hover:scale-110 duration-300">
                      <Image src="/assets/rupeeicon.png" alt="about" width={40} height={50} />
                     </div>
                     <div className="col-span-7">
                      <h2 className='text-2xl font-semibold mb-3'>The ability to identify plot market</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facere deserunt neque iure repellendus, vel aliquid ducimus mollitia eligendi, architecto debitis possimus perferendis, blanditiis vitae perspiciatis accusantium hic vero necessitatibus.
                      </p>
                     </div>
                    </div>
                    <div className=" mt-5 ">
                    <div className="grid grid-cols-9 gap-2 ">
                     <div className="col-span-2 flex justify-center items-start my-10 hover:scale-110 duration-300">
                      <Image src="/assets/partnershipicon.png" alt="about" width={50} height={50} />
                     </div>
                     <div className="col-span-7">
                      <h2 className='text-2xl font-semibold mb-3'>The ability to find better partnerships</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facere deserunt neque iure repellendus, vel aliquid ducimus mollitia eligendi, architecto debitis possimus perferendis, blanditiis vitae perspiciatis accusantium hic vero necessitatibus.
                      </p>
                     </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
        
              </div>
    </div>
  )
}

export default Services