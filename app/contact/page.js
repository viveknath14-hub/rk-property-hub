import { PhoneIcon } from '@heroicons/react/24/outline'
import { Link, LocateFixedIcon, LocateIcon, MapIcon, MapPin, MessageCircleIcon, Phone } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="mb-14 text-center">
                <h1 className="text-4xl font-semibold text-gray-900">
                Contact & <span className="text-primary">Visit Us</span>
                    </h1>

                <p className="mt-3 text-gray-600">
                Get in touch or visit our office for property consultation
                </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* CONTACT CARD */}
          <div
  id="contact"
  className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition"
>
  <h2 className="text-2xl font-semibold mb-6">
    Contact <span className="text-primary">Us</span>
  </h2>

  <div className="space-y-5 text-gray-700">

    <p className="flex items-center gap-3">
      <span className="text-primary text-lg"><Phone></Phone></span>
      <span>
        <strong>Phone:</strong> +91 8882471274
      </span>
    </p>

    <p className="flex items-center gap-3">
      <span className="text-primary text-lg"><MessageCircleIcon></MessageCircleIcon></span>
      <span>
        <strong>WhatsApp:</strong> +91 9654316965
      </span>
    </p>

    <p className="flex items-start gap-3">
      <span className="text-primary text-lg mt-1"><MapIcon></MapIcon></span>
      <span>
        <strong>Address:</strong> 296, Pocket 2, Sector 24,<br />
        
        Rohini, New Delhi-110085
      </span>
    </p>

  </div>
</div>


          {/* VISIT CARD */}
          <div
            id="visit"
            className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-6">
              Visit Our <span className="text-primary">Office</span>
            </h2>

            <div className="overflow-hidden rounded-xl border border-gray-200 mb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4571.5760450882635!2d77.08755546348416!3d28.725662570915382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07b939bad1c7%3A0xb2a34370ed501837!2sRK%20Property%20Hub!5e0!3m2!1sen!2sin!4v1766837360145!5m2!1sen!2sin"
                className="w-full h-[320px] border-0"
                loading="lazy"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/RK+Property+Hub/@28.7256626,77.0875555,16.61z/data=!4m14!1m7!3m6!1s0x390d07b939bad1c7:0xb2a34370ed501837!2sRK+Property+Hub!8m2!3d28.7257044!4d77.0876706!16s%2Fg%2F11mrl2fcms!3m5!1s0x390d07b939bad1c7:0xb2a34370ed501837!8m2!3d28.7257044!4d77.0876706!16s%2Fg%2F11mrl2fcms?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Get Directions →
            </a>
          </div>

        </div>
      </div>
    </section>
    <section className="bg-black py-24">
  <div className="max-w-5xl mx-auto text-center px-6">
    <h2 className="text-4xl font-semibold text-white">
      Trusted Real Estate <span className="text-primary">Guidance</span>
    </h2>

    <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
      Whether it’s residential, commercial, or industrial property, we help you move forward with clarity and confidence.
    </p>

    <a
      href="/contact"
      className="inline-block mt-8 bg-primary text-black font-medium px-8 py-3 rounded-lg hover:bg-yellow-400 transition"
    >
      Get in Touch
    </a>
  </div>
</section>
    </div>
  )
}

export default page