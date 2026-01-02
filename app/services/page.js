import Image from 'next/image';
import React from 'react'

export const page = () => {
  return (
    <div>
        <div className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/assets/services.jpg"
          alt="Real estate services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            Our <span className="text-[#fdcd02]">Services</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Complete real estate solutions backed by expertise, transparency,
            and financial understanding.
          </p>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Our <span className="text-[#fdcd02]">Core Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Legal & Paperwork Expertise",
              desc: "We specialize in documentation, agreements, and identifying issues in property ownership chains to ensure safe transactions.",
            },
            {
              title: "Property Chain Verification",
              desc: "Our experience helps us detect hidden risks, missing links, or errors in property history before you commit.",
            },
            {
              title: "Banking & Loan Advisory",
              desc: "With strong banking knowledge, we guide you on home loans, approvals, eligibility, and financial structuring.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-14">
            Property <span className="text-[#fdcd02]">Segments We Handle</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Residential Properties",
                desc: "Buying, selling, and renting of homes, apartments, plots, and builder floors.",
                img: "/assets/residence.jpg",
              },
              {
                title: "Commercial Spaces",
                desc: "Offices, shops, showrooms, and commercial units for sale, purchase, or lease.",
                img: "/assets/commercial.jpg",
              },
              {
                title: "Industrial Properties",
                desc: "Industrial areas, warehouses, factories, and sheds for rent, sale, and purchase.",
                img: "/assets/industrial.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md
                           hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300"
              >
                {/* Image placeholder */}
                <Image
            src={item.img}
            alt={item.title}
            width={400}
            height={250}
            className="rounded-lg mb-6 object-cover"
              />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIAL & ADVISORY SUPPORT */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Financial & <span className="text-[#fdcd02]">Advisory Support</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Real estate decisions are deeply connected with finance.
              Our background in banking and property finance allows us to guide
              clients beyond just property selection.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From loan feasibility to documentation readiness, we ensure
              your investment is financially sound and stress-free.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="relative h-72 rounded-2xl overflow-hidden bg-gray-200">
            <Image
              src="/assets/finAdvice.jpg"
              alt="Financial and property advisory support"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
          </div>
      </section>

      {/* DDA & MCD LIAISONING */}
<section className="bg-gray-50 py-20">
  <div className="container mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

      {/* Image — LEFT */}
      <div className="relative h-72 rounded-2xl overflow-hidden bg-gray-200 order-2 md:order-1">
        <Image
          src="/assets/liaison.jpg"
          alt="DDA and MCD liaisoning services"
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />
      </div>


      {/* Text — RIGHT */}
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-semibold mb-6">
          DDA & MCD <span className="text-[#fdcd02]">Liaisoning Services</span>
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Property transactions often require coordination with government
          authorities. We provide reliable liaisoning support with DDA, MCD,
          and related departments.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 bg-[#fdcd02]" />
            Property maps and layout plan assistance
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 bg-[#fdcd02]" />
            Documentation support with DDA / MCD
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 bg-[#fdcd02]" />
            Guidance on approvals and compliance
          </li>
        </ul>
      </div>

    </div>

  </div>
</section>



      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Trusted Real Estate <span className="text-[#fdcd02]">Guidance</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          Whether it’s residential, commercial, or industrial property,
          we help you move forward with clarity and confidence.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#fdcd02] text-black font-medium hover:opacity-90 transition">
          Get in Touch
        </button>
      </section>

    </div>


    </div>
  )
}
export default page;