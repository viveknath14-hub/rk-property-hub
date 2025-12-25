import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
<footer style={{
    background: "linear-gradient(135deg, #333132 0%, #1a1819 100%)",
  }}
  className="text-white">
      
      {/* Top footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + description */}
          <div>
            <div className="flex items-center mb-4 h-7">
              <Link href="#" className="">
                          <Image
                            src="/rkPropertyHub.png"
                            alt="RK Property Hub logo"
                            width={160}
                            height={80}
                            priority
                          />
                        </Link>
              <h3 className="font-semibold text-primary whitespace-nowrap">RK PROPERTY HUB</h3>
            </div>
            <p className="text-sm leading-relaxed text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Minima et eligendi suscipit, ullam cum illo accusantium.
              Quisquam ipsum, error voluptas autem.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-white">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Facilities</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">Support</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
            </ul>
          </div>

          {/* Updates */}
          <div>
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
          © 2023 All Right Reserves rkpropertyhub.com
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