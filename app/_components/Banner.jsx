import { Handshake } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className="container" style={{background: 'linear-gradient(135deg, #333132 0%, #1a1819 100%)'}}>
      <div className="grid grid-cols-2 items-center gap-20 justify-around py-10">
        <div className="p-10">
          <h1 className="text-6xl font-semibold py-0 text-white">
            Search properties with <br />
            <span className='text-[#fdcd02]'>RK PROPERTY HUB</span>
          </h1>
          <p className="text-gray-300 pt-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel soluta praesentium ad a assumenda minus facilis vitae at expedita! Quaerat, ut. Aspernatur repellendus repellat nostrum ex odio ullam id!
          </p>
          <div className="flex w-full gap-20 py-6 px-4">
            <Image src="/assets/icon1.png" alt="Apartment 1" width={80} height={50} />
            <Image src="/assets/icon2.png" alt="Apartment 2" width={80} height={50} />
            <Image src="/assets/icon3.png" alt="Apartment 3" width={80} height={50} />
          </div>
          <div className="">
          <div className="flex flex-col gap-4 ">
           <form action="#" method="post">
            <input type="text" placeholder="Location" className="w-96 px-4 py-2 border rounded bg-white " required />

            <button className="px-6 py-2 bg-[#fdcd02] text-black rounded text-lg cursor-pointer" type='submit'>Search</button>
            </form>
          </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          
          {/* this for positions */}

          <div className="absolute top-7 left-22">
            <div className=" w-32 bg-opacity-20 bg-gray-400/60 rounded-t-full p-2 shadow-md">
              <div className=" w-28 bg-white rounded-t-full shadow-md p-2 ">
                <div className="w-24 bg-[#fdcd02] rounded-t-full p-4">
                  <h1 className="text-xl font-semibold text-center pt-2">Super sale!
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-10 top-80 ">
            <div className="w-56 space-y-4 bg-gray-400/60 p-3 rounded-lg shadow-lg">
              <div className="flex gap-3 items-center bg-white p-2 justify-center rounded-lg">
                <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                Paid Partnership
              </div>
              <div className="flex gap-3 items-center bg-white p-2 justify-center rounded-lg">
                <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                Paid Partnership
              </div>
              <div className="flex gap-3 items-center bg-white p-2 justify-center rounded-lg">
                <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                Paid Partnership
              </div>
              <div className="flex gap-3 items-center bg-white p-2 justify-center rounded-lg">
                <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                Paid Partnership
              </div>
            
          </div>

          
          </div>
          {/* this for image */}
          <div className="">
            <Image src="/assets/mainHomeC3.jpg" alt="Home1-hero-banner" width={500} height={500} className="object-cover object-center rounded rounded-t-full px-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner