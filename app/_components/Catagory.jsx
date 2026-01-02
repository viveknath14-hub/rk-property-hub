import { Handshake } from "lucide-react";
import Image from "next/image";
import React from "react";

const Catagory = () => {
  const factories = [
    { id: 1, src: "/assets/factory1.png", label: "Factory" },
    { id: 2, src: "/assets/factory2.png", label: "Warehouse" },
    { id: 3, src: "/assets/factory3.png", label: "Manufacturing" },
  ];

  return (
    <section className="bg-stone-50 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* IMAGE COLUMN */}
        <div className="relative order-1 lg:order-2">
          <div className="flex justify-center lg:justify-end lg:mx-20 mx-5">
            <Image
              src="/assets/factory22.jpg"
              width={500}
              height={600}
              alt="category image"
              className="rounded-t-full bg-gray-300/20 backdrop-blur-sm shadow-md p-4"
            />
          </div>

          {/* OVERLAY – mobile static, desktop absolute */}
          <div className="
            mt-6
            sm:absolute
            flex justify-center
            lg:mt-0
            lg:absolute
            lg:right-10
            lg:top-80
            
          ">
            <div className="w-56 space-y-4 bg-gray-400/60 p-3 rounded-lg shadow-lg">
              {[
                "Industrial space",
                "Sale, Purchase, Rent",
                "Lease option",
                "Paid Partnership",
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-center bg-white p-2 rounded-lg">
                  <Handshake size={35} className="bg-primary p-2 rounded-sm text-white" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEXT COLUMN */}
        <div className="order-2 lg:order-1 space-y-6 mx-6 lg:mx-10 flex flex-col justify-center">
          <div className="py-6 lg:py-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black capitalize">
              Get an industrial space
              <span className="text-[#fdcd02]"> for your business</span>
            </h1>

            <p className="pt-5 text-sm sm:text-lg">
              Choose industrial properties that match your operational needs, logistics,
  and expansion plans. We connect you with reliable spaces that enable
  smoother workflows and scalable business growth.
            </p>
          </div>

            {/* ICON GRID */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10">
              {factories.map((factory) => (
                <div
                  key={factory.id}
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    src={factory.src}
                    alt="category image"
                    width={140}
                    height={140}
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
                  />
                  <h2 className="text-sm sm:text-base pt-2">
                    {factory.label}
                  </h2>
                </div>
                       ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Catagory;
