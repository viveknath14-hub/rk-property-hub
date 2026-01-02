import { Button } from "@headlessui/react";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="w-full py-10 overflow-hidden">
      {/* CONTENT WRAPPER */}
      <div className="px-4
                      sm:px-6
                      sm:max-w-7xl
                      sm:mx-auto
                      lg:mx-5
                      lg:max-w-none ">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE + BADGE */}
          <div className="relative justify-center">
            <Image
              src="/assets/main22.jpg"
              alt="about"
              width={500}
              height={600}
              className="rounded-t-full bg-gray-300/20 backdrop-blur-sm shadow-md p-4"
            />

            {/* BADGE – RESPONSIVE */}
            <div
              className="
                absolute
                top-4 left-4
                scale-75
                sm:scale-90
                lg:scale-100
                sm:top-6 sm:left-6
                lg:top-5 lg:right-40 lg:left-auto
                origin-top-left
              "
            >
              <div className="w-32 bg-gray-400/60 rounded-t-full p-2 shadow-md">
                <div className="w-28 bg-white rounded-t-full shadow-md p-2">
                  <div className="w-24 bg-[#fdcd02] rounded-t-full p-4">
                    <h1 className="text-sm lg:text-xl font-semibold text-center pt-2">
                      Super sale!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black capitalize">
              Purchase for more than a home
              <span className="text-[#fdcd02]"> This Time</span>
            </h1>

            <p className="pt-5 text-sm sm:text-lg">
              Go beyond square feet and floor plans. Discover thoughtfully selected
              properties that offer security, value, and a foundation for the life
              you’re building.
            </p>

            {/* CARDS */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { img: "/assets/main_c.jpg", title: "Buy a home" },
                { img: "/assets/home33c.jpg", title: "Rent a home" },
                { img: "/assets/home11.jpg", title: "Sell a home" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-300/20 backdrop-blur-sm rounded-t-full text-center shadow-md relative"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-t-full"
                  />

                  <h1 className="py-2 text-lg">{item.title}</h1>

                  <Button className="bg-[#fdcd02] text-black px-4 py-2 rounded mt-2 hover:bg-yellow-400">
                    Contact Us
                  </Button>

                  {/* ICON */}
                  <div className="absolute top-2 right-2 bg-gray-300/20 backdrop-blur-sm p-2 rounded-md">
                    <div className="bg-[#fdcd02] rounded-sm p-2 w-10">
                      <HomeIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
