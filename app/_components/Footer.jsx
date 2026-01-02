import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LocateFixed, LocateIcon, Mail, MapIcon, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <div>
<footer style={{
    background: "linear-gradient(135deg, #333132 0%, #1a1819 100%)",
  }}
  className="text-white">
      
      {/* Top footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">

          {/* Logo + description */}
          <div className="col-span-2 lg:col-span-1 lg:pr-6">
            <div className="flex items-center mb-4 h-7">
              <Link href="#" className="">
                          <Image
                            src="/rkPropertyHub.png"
                            alt="RK Property Hub logo"
                            width={160}
                            height={48}
                            priority
                          />
                        </Link>
              <h3 className="font-semibold text-primary whitespace-nowrap">RK PROPERTY HUB</h3>
            </div>
            <p className="text-sm leading-relaxed text-white">
              RK Property Hub is a trusted real estate advisory helping individuals and
              businesses find the right residential, commercial, and industrial spaces.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-300 sm:text-base">
            <a
                href="https://maps.app.goo.gl/YiZi6YaxmwX39SB99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition"
              >
                <MapIcon className="w-4 h-4 mt-0.5" />
                <span>296, pocket 2, sector 24, rohini</span>
              </a>
                <a href="tel:+918882471272" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 8882471272</span>
              </a>
              <a href="tel:+919654316965" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9654316965</span>
              </a>

                <a
                href="mailto:bhimath157@gmail.com?subject=Property%20Enquiry"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="w-4 h-4" />
                <span>bhimnath157@gmail.com</span>
              </a>
              </div>
            </div>

          {/* Links */}
          <div className='flex flex-col items-start text-left lg:mx-auto'>
            <h3 className="text-primary font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="#" className="hover:text-primary cursor-pointer">Home</Link></li>
             <li><Link href="#" className="hover:text-primary cursor-pointer">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary cursor-pointer">Services</Link></li>
              <li><Link href="#" className="hover:text-primary cursor-pointer">Facilities</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className='flex flex-col items-end lg:items-start lg:text-left lg:mx-auto '>
            <h3 className="text-primary font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="#" className="hover:text-primary cursor-pointer">Facebook</Link></li>
              <li><Link href="#" className="hover:text-primary cursor-pointer">Instagram</Link></li>
              <li><Link href="#" className="hover:text-primary cursor-pointer">Support</Link></li>
              <li><Link href="#" className="hover:text-primary cursor-pointer">Twitter</Link></li>
            </ul>
          </div>

          {/* Updates */}
          <div className="col-span-2 lg:col-span-1 lg:pl-6">
            <h3 className="text-primary font-semibold mb-4">Here are updates</h3>

            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-gray-600" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Here are updates
                  </p>
                  <p className="text-xs text-gray-400">
                    Lorem Ipsum Dolor Sit
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Bottom footer */}
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © 2025 All Right Reserves rkpropertyhub.com
        </p>

        <div className="flex gap-3">
          {["f", "t", "i", "in"].map((icon, index) => (
            <div
              key={index}
              className="w-9 h-9 rounded-full bg-gray-700
                         flex items-center justify-center
                         text-sm font-semibold text-white
                         hover:bg-primary cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

    </footer>
</div>
  )
}

export default Footer