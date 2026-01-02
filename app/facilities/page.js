import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <img
          src="/assets/facilities11.jpg"
          alt="Industrial and commercial real estate facilities in Delhi NCR"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            Our <span className="text-[#fdcd02]">Facilities</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            End-to-end real estate facilities across Delhi NCR with strong
            expertise in industrial, commercial, and compliance-driven services.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-6 py-20 max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Built for <span className="text-[#fdcd02]">Serious Property Decisions</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          In markets like Delhi NCR, real estate—especially industrial and
          commercial property—requires more than listings. It demands
          documentation accuracy, regulatory understanding, and practical
          execution support.
        </p>
      </section>

      {/* FACILITIES GRID */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {[
              {
                title: "Industrial Property Facilities",
                desc: "Dedicated facilities for renting, buying, and selling industrial areas, warehouses, factories, and sheds across key industrial zones of Delhi NCR.",
                img: "/assets/industryfac.jpg",
              },
              {
                title: "Legal & Documentation Support",
                desc: "Comprehensive documentation and legal support for industrial, commercial, and residential properties ensuring compliance and risk-free transactions.",
                img: "/assets/documentfac.jpg",
              },
              {
                title: "Property Chain Verification",
                desc: "Detailed verification of property ownership chains to identify risks, missing links, or discrepancies—critical for high-value industrial assets.",
                img: "/assets/chainfac.jpg",
              },
              {
                title: "Banking & Loan Assistance",
                desc: "Advisory support backed by banking experience to guide clients on loans, financial feasibility, and funding options for property transactions.",
                img: "/assets/loanfac.jpg",
              },
              {
                title: "Residential & Commercial Facilities",
                desc: "End-to-end facilities for homes, builder floors, offices, shops, and commercial spaces with structured processes and clear documentation.",
                img: "/assets/resconfac.jpg",
              },
              {
                title: "DDA & MCD Liaisoning Services",
                desc: "Professional liaisoning support with DDA, MCD, and related authorities for property maps, layout plans, approvals, and compliance requirements.",
                img: "/assets/liaisonfac.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md
                           hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300"
              >
                {/* Image placeholder */}
                  <div className="relative h-40 rounded-lg mb-6 overflow-hidden bg-gray-200">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="container mx-auto px-6 py-20 max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Why These <span className="text-[#fdcd02]">Facilities Matter</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Industrial and commercial property decisions involve higher stakes,
          regulatory complexity, and long-term financial impact. Our facilities
          are designed to support investors, businesses, and property owners
          with clarity, compliance, and confidence.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          One Platform. <span className="text-[#fdcd02]">Complete Property Support.</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          From industrial warehouses to residential homes, our facilities are
          built to simplify real estate decisions across Delhi NCR.
        </p>
        <Link href='/contact'>
        <button className="mt-8 px-8 py-3 bg-[#fdcd02] text-black font-medium hover:opacity-90 transition">
          Contact Us
        </button>
        </Link>
      </section>

      {/* SEO BOOST (hidden but effective) */}
      <p className="sr-only">
        Industrial property facilities in Delhi NCR including warehouses,
        factories, industrial plots, DDA and MCD liaisoning, documentation,
        property chain verification, and banking support for real estate
        transactions.
      </p>

    </div>
    </div>
  )
}

export default page