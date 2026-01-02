import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-10 overflow-hidden">
      {/* WRAPPER */}
      <div
        className="
          px-4
          sm:px-6
          sm:max-w-7xl
          sm:mx-auto
          lg:mx-5
          lg:max-w-none
        "
      >
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* IMAGE + BADGE */}
          <div className="relative justify-center lg:justify-end ">
            <Image
              src="/assets/Plot11.jpg"
              alt="about"
              width={500}
              height={600}
              className="rounded-t-full bg-gray-300/20 backdrop-blur-sm shadow-md p-4"
            />

            {/* SUPER SALE BADGE */}
            <div
                  className="
                    absolute
                    top-0 left-1
                    scale-75
                    lg:scale-100
                    lg:top-5 lg:right-40
                    lg:left-auto
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

          {/* CONTENT */}
          <div className="order-2 lg:order-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black capitalize">
              Get a plot for your
              <span className="text-[#fdcd02]"> Dream Home</span>
            </h1>

            <p className="pt-5 text-sm sm:text-lg">
              When you choose a plot, you choose possibilities. Plan a spacious home,
  thoughtful design, and long-term comfort — built on land that supports
  your future, not just your present.
            </p>

            {/* FEATURE 1 */}
            <div className="mt-10 flex items-start gap-4">
  <Image
    src="/assets/rupeeicon.png"
    alt="icon"
    width={28}
    height={28}
    className="mt-1 shrink-0"
  />

  <div>
    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
      The ability to identify plot market
    </h2>
    <p className="text-sm sm:text-base leading-relaxed">
      Understand the true potential of a location before you invest. From future
  infrastructure and connectivity to appreciation trends, we help you
  identify plots that hold long-term value, not just present appeal.
    </p>
  </div>
</div>

            {/* FEATURE 2 */}
            <div className="mt-8 flex items-start gap-4">
  <Image
    src="/assets/partnershipicon.png"
    alt="icon"
    width={28}
    height={28}
    className="mt-1 shrink-0"
  />

  <div>
    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
      The ability to provide convenience
    </h2>
    <p className="text-sm sm:text-base leading-relaxed">
      Buying a plot should bring peace of mind, not paperwork stress. We help
  you navigate legal checks, clear titles, and documentation so your
  investment remains safe, transparent, and future-proof.
    </p>
  </div>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Services
