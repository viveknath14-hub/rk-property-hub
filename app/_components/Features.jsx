import { CreditCard, CreditCardIcon, Navigation } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const featuresData = [
  {
    id: 1,
    image: "/assets/ab1.png",
    primaryAction: {
      title: "Buy now",
      subtitle: "Visit the site",
    },
    secondaryAction: {
      title: "Book now",
      subtitle: "Home on rent",
    },
  },
  {
    id: 2,
    image: "/assets/ab2123.jpg",
    primaryAction: {
      title: "Buy now",
      subtitle: "Visit the site",
    },
    secondaryAction: {
      title: "Book now",
      subtitle: "Home on rent",
    },
  },
  {
    id: 3,
    image: "/assets/3135.jpg",
    primaryAction: {
      title: "Buy now",
      subtitle: "Visit the site",
    },
    secondaryAction: {
      title: "Book now",
      subtitle: "Home on rent",
    },
  },
]


const Features = () => {
  return (
    <div className="container mx-auto bg-stone-50 py-10">

      {/* 🔹 Heading section */}
      <div className="mb-10">
        <h2 className="text-6xl font-semibold py-5 text-black capitalize text-center">
          Take the <span className="text-[#fdcd02]">First Step</span>
        </h2>
        <p className="text-lg font-normal text-center">
          Set a goal for your real estate investment and we will help you
        </p>
      </div>
    
    <div className="grid grid-cols-3 gap-10">
  {featuresData.map((item) => (
    <div key={item.id}>
      <div className="flex flex-col items-center justify-center
                      rounded-lg bg-gray-300/20 backdrop-blur-sm
                      p-4 shadow-md mx-10">

        <Image
          src={item.image}
          alt="feature"
          width={500}
          height={500}
          className="object-center rounded-lg bg-gray-300/20
                     backdrop-blur-sm shadow-md mb-4"
        />

        <div className="grid grid-cols-2 gap-2 mx-10">
          {/* Primary action */}
          <div className="p-4 rounded-2xl text-center flex flex-col
                          items-center justify-center bg-primary
                          space-y-1 shadow-md">
            <Navigation size={40} className="bg-white p-2 rounded-sm text-primary" />
            <h2 className="font-normal">{item.primaryAction.title}</h2>
            <p>{item.primaryAction.subtitle}</p>
          </div>

          {/* Secondary action */}
          <div className="p-4 rounded-2xl bg-white text-center flex flex-col
                          items-center justify-center border-2
                          space-y-1 shadow-md">
            <CreditCard size={40} className="bg-primary p-2 rounded-sm text-white" />
            <h2 className="font-normal">{item.secondaryAction.title}</h2>
            <p>{item.secondaryAction.subtitle}</p>
          </div>
        </div>

      </div>
    </div>
      
  ))}
</div>

  </div>
  )
  
}

export default Features