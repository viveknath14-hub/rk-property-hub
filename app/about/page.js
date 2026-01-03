import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
   <div className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
        <Image
  src="/assets/aboutbackground11.jpg"
  alt="Real estate hero"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            About <span className="text-[#fdcd02]">RK Property Hub</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            We help people make confident real estate decisions with clarity and trust.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="container mx-auto px-6 py-16 ">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Who <span className="text-[#fdcd02]">We Are</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            RK Property Hub is a modern real estate consultancy focused on helping
            buyers, sellers, and investors make smart property decisions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our approach is simple: honest advice, deep market understanding,
            and solutions tailored to your goals.
          </p>
        </div>

        <div className="border-l-4 border-[#fdcd02] pl-6">
          <p className="text-xl font-medium">
            “Real estate is not about buying property.
            <br />
            It’s about investing in certainty.”
          </p>
        </div>
        
        </div>
      </section>

          {/* STATS / TRUST METRICS */}
<section className="bg-white py-10">

    <div className="container mx-auto px-6">

    <h2 className="text-3xl font-semibold text-center mb-4">
      Experience <span className="text-[#fdcd02]">That Delivers Results</span>
    </h2>

    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-14">
      A track record built on experience, transparency, and long-term client relationships.
    </p>
    

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        {
          value: "500+",
          label: "Properties Listed",
        },
        {
          value: "1000+",
          label: "Happy Clients",
        },
        {
          value: "15+",
          label: "Years Experience",
        },
        {
          value: "50+",
          label: "Cities Covered",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 text-center
                     shadow-md hover:shadow-xl
                     hover:-translate-y-1 transition-all duration-300"
        >
          <div className="text-3xl font-semibold text-black mb-2">
            {item.value}
          </div>
          <p className="text-md text-gray-600">
            {item.label}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* OUR PROCESS */}
<section className="bg-white py-10">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-semibold text-center mb-14">
      Our <span className="text-[#fdcd02]">Process</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
      {[
        {
          step: "01",
          title: "Understand Your Goals",
          desc: "We begin by understanding your budget, timeline, and long-term objectives.",
        },
        {
          step: "02",
          title: "Market Research",
          desc: "We analyze locations, pricing trends, and growth potential.",
        },
        {
          step: "03",
          title: "Property Shortlisting",
          desc: "Only verified, high-potential options are shared with you.",
        },
        {
          step: "04",
          title: "Decision & Support",
          desc: "From negotiation to paperwork, we guide you end-to-end.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-8 border rounded-2xl shadow-md
             hover:shadow-xl hover:-translate-y-1
             transition-all duration-300"
        >
          <div className="text-[#fdcd02] font-semibold text-xl mb-3">
            {item.step}
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700 text-md leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WHAT WE DO */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What <span className="text-[#fdcd02]">We Do</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Residential Properties",
                desc: "Helping families and individuals find homes that match their lifestyle.",
              },
              {
                title: "Investment Consulting",
                desc: "Identifying high-potential plots and properties with long-term value.",
              },
              {
                title: "Market Guidance",
                desc: "Providing clear insights on pricing, location advantages, and risk.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 border rounded-2xl shadow-md
             hover:shadow-xl hover:-translate-y-1
             transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Why <span className="text-[#fdcd02]">Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            "Transparent and honest property advice",
            "Deep understanding of local markets",
            "Client-first, not commission-first",
            "Long-term relationships, not one-time deals",
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 bg-[#fdcd02]" />
              <p className="text-lg text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Let’s Build Your <span className="text-[#fdcd02]">Future</span> Together
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          Whether you are buying your first home or planning a long-term investment,
          RK Property Hub is here to guide you.
        </p>
        <Link href = '/contact'>
        <button className="mt-8 px-8 py-3 bg-[#fdcd02] text-black font-medium hover:opacity-90 transition">
          Contact Us
        </button>
        </Link>
      </section>

    </div>


  )
}



export default page