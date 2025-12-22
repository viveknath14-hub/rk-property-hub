import { CreditCard, CreditCardIcon, Navigation } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='container mx-auto bg-stone-50 py-10'>
      <div className="">
        <h2 className='text-6xl font-semibold py-5 text-black capitalize text-center'>Take the
          <span className='text-[#fdcd02]'> First Step</span>
        </h2>
        <p className='text-lg font-normal text-center mb-5'>Set a goal for your real estate investment and we will help you</p>

      </div>
       <div className="grid grid-cols-3 gap-10">
        <div className="">
           <div className="flex justify-center items-center rounded-lg bg-gray-300/20
            backdrop-blur-sm p-4 shadow-md flex-col mx-10">
            <Image src="/assets/ab1.png" alt="feature1" width={500} height={500} className='object-center rounded-lg  bg-gray-300/20 backdrop-blur-sm shadow-md mb-4'/>

            <div className="grid grid-cols-2 items-center justify-center mx-10 gap-2 ">
               <div className="p-4 rounded-2xl text-center flex flex-col items-center justify-center bg-primary space-y-1 shadow-md">
                <Navigation size={40} className="bg-white p-2 rounded-sm text-primary" />
                <h2 className='font-normal'>Buy now</h2>
                <p>Visit the site</p>
               </div>
               <div className="p-4 rounded-2xl bg-white text-center flex flex-col items-center justify-center border-2 space-y-1 shadow-md">
                 <CreditCard size={40} className="bg-primary p-2 rounded-sm text-white" />
                <h2 className='font-normal'>Book now</h2>
                <p>Home on rent</p>
                </div>
            
            </div> 
             
            </div>
        </div>
        <div className="">
            <div className="flex justify-center items-center rounded-lg bg-gray-300/20
            backdrop-blur-sm p-4 shadow-md flex-col mx-10">
            <Image src="/assets/ab2123.jpg" alt="feature1" width={500} height={500} className='object-center rounded-lg  bg-gray-300/20 backdrop-blur-sm shadow-md mb-4'/>

            <div className="grid grid-cols-2 items-center justify-center mx-10 gap-2">
               <div className="p-4 rounded-2xl text-center flex flex-col items-center justify-center bg-primary space-y-1 shadow-md">
                <Navigation size={40} className="bg-white p-2 rounded-sm text-primary" />
                <h2 className='font-normal'>Buy now</h2>
                <p>Visit the site</p>
               </div>
               <div className="p-4 rounded-2xl bg-white text-center flex flex-col items-center justify-center border-2 space-y-1 shadow-md">
                 <CreditCard size={40} className="bg-primary p-2 rounded-sm text-white" />
                <h2 className='font-normal'>Book now</h2>
                <p>Home on rent</p>
                </div>
            
            </div> 
             
            </div>
        </div>
        <div className="">
            <div className="flex justify-center items-center rounded-lg bg-gray-300/20
            backdrop-blur-sm p-4 shadow-md flex-col mx-10">
            <Image src="/assets/3135.jpg" alt="feature1" width={500} height={500} className='object-center rounded-lg  bg-gray-300/20 backdrop-blur-sm shadow-md mb-4'/>

            <div className="grid grid-cols-2 items-center justify-center mx-10 gap-2">
               <div className="p-4 rounded-2xl text-center flex flex-col items-center justify-center bg-primary space-y-1 shadow-md">
                <Navigation size={40} className="bg-white p-2 rounded-sm text-primary" />
                <h2 className='font-normal'>Buy now</h2>
                <p>Visit the site</p>
               </div>
               <div className="p-4 rounded-2xl bg-white text-center flex flex-col items-center justify-center border-2 space-y-1 shadow-md shadow-md">
                 <CreditCard size={40} className="bg-primary p-2 rounded-sm text-white" />
                <h2 className='font-normal'>Book now</h2>
                <p>Home on rent</p>
                </div>
            
            </div> 
             
            </div>
        </div>
       </div>
    </div>
  )
}

export default Features