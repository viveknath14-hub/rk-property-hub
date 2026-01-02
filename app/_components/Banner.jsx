import { Handshake } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function Banner() {

const paidPartnershipBadge=[
  "Strong Alliance",
  "Experience Driven",
  "Expert Network",
  "Mutual Trust"
]

  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #333132 0%, #1a1819 100%)",
      }}
    >
      {/* CONTENT WRAPPER */}
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 py-5 lg:py-10">

          {/* LEFT CONTENT */}
          <div className="p-4 sm:p-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              Search properties with <br />
              <span className="text-[#fdcd02]">RK PROPERTY HUB</span>
            </h1>

            <p className="text-gray-300 mt-5 text-sm sm:text-lg">
              Explore verified residential, industrial, and commercial properties tailored
              to your needs. From homes and apartments to warehouses, factories, and
              ready-to-move business spaces, RK Property Hub helps you find the right
              location with confidence.
            </p>

            {/* ICONS */}
            <div className="flex gap-6 sm:gap-10 py-6">
              <Image src="/assets/icon1.png" alt="" width={60} height={50} />
              <Image src="/assets/icon2.png" alt="" width={60} height={50} />
              <Image src="/assets/icon3.png" alt="" width={60} height={50} />
            </div>

            {/* SEARCH */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 border rounded bg-white"
                required
              />
              <button
                className="px-6 py-3 bg-[#fdcd02] text-black rounded text-lg"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE + OVERLAPS */}
          <div className="relative flex justify-center">

            {/* MAIN IMAGE */}
            <Image
              src="/assets/mainHomeC3.jpg"
              alt="Home hero"
              width={500}
              height={500}
              className="object-cover object-center rounded-t-full px-0 lg:px-10 pb-6"
            />

            {/* SUPER SALE BADGE – DESKTOP ONLY */}
            {/* SUPER SALE BADGE – RESPONSIVE */}
            <div
              className="
                absolute
                top-0 left-4
                scale-75
                sm:scale-90
                lg:scale-100
                sm:top-6 sm:left-6
                lg:top-7 lg:left-20
                origin-top-left
              "
             >
              <div className="w-32 bg-gray-400/60 rounded-t-full p-2 shadow-md">
                <div className="w-28 bg-white rounded-t-full shadow-md p-2">
                  <div className="w-24 bg-[#fdcd02] rounded-t-full p-4">
                    <h1 className="text-md lg:text-xl font-semibold text-center pt-2">
                      Super sale!
                    </h1>
                  </div>
                </div>
              </div>
            </div>


            {/* PAID PARTNERSHIP – DESKTOP ONLY */}
          
            <div className="hidden lg:block absolute right-10 top-80">
              <div className="w-56 space-y-4 bg-gray-400/60 p-3 rounded-lg shadow-lg">
                {paidPartnershipBadge.map((text, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-center bg-white p-2 justify-start rounded-lg"
                  >
                    <Handshake
                      size={35}
                      className="bg-primary p-2 rounded-sm text-white"
                    />
                    <span className="text-md text-gray-900">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner