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
      subtitle: "A business space",
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
      subtitle: "A plot of land",
    },
  },
]


const Features = () => {
  return (
  <div className="bg-stone-50 py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* Heading */}
    <div className="mb-10 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold py-5">
        Take the <span className="text-[#fdcd02]">First Step</span>
      </h2>
      <p className="text-base sm:text-lg">
        Set a goal for your real estate investment and we will help you
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {featuresData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center rounded-lg
                     bg-gray-300/20 backdrop-blur-sm
                     p-4 shadow-md"
        >
          <Image
            src={item.image}
            alt="feature"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />

          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="p-4 rounded-2xl bg-primary text-center flex flex-col items-center space-y-1 shadow-md">
              <Navigation size={32} className="bg-white p-2 rounded-sm text-primary" />
              <h2>{item.primaryAction.title}</h2>
              <p>{item.primaryAction.subtitle}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white text-center flex flex-col items-center space-y-1 border shadow-md">
              <CreditCard size={32} className="bg-primary p-2 rounded-sm text-white" />
              <h2>{item.secondaryAction.title}</h2>
              <p>{item.secondaryAction.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>

  )
  
}

export default Features