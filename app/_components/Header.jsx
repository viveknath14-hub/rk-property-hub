'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPinHouse, Smile, User2Icon, UserRoundSearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="relative mx-auto flex max-w-7xl items-center px-4 lg:px-8">
        <div className="flex flex-1">
          <Link href="#" className="flex items-center">
            <Image
              src="/rkPropertyHub.png"
              alt="RK Property Hub logo"
              width={160}
              height={48}
              className='object-contain w-[150px] '
              priority
            />
          </Link>
        </div>
        <div className=" lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <Link href="#" className="text-lg font-medium tracking-wide text-gray-900 ">
            Home
          </Link>
          <Link href="#" className="text-lg font-medium tracking-wide text-gray-900">
            About us
          </Link>
          <Link href="#" className="text-lg font-medium tracking-wide text-gray-900">
            Services
          </Link>
          <Link href="#" className="text-lg font-medium tracking-wide text-gray-900">
            Facilities
          </Link>
          <Link href="#" className="text-lg font-medium tracking-wide text-gray-900">
            Blogs
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
          {/* <Link href="#" className="text-lg font-normal tracking-wide text-gray-900 flex items-center gap-2">
            Log in <ArrowRight size={20} />
          </Link> */}
          <Link href="/contact#contact">
          <Button><User2Icon size={20} />Contact us</Button>
          </Link>
          <Link href="/contact#visit">
          <Button variant="secondary"><MapPinHouse size={20} />Visit now</Button>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">RK Property Hub logo</span>
              <Image
                alt="RK Property Hub logo"
                src="/rkPropertyHub.png"
                width={160}
                height={80}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About us</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Services</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Facilities</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Blogs</Link>
              </div>
              {/* <div className="py-6">
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</Link >
              </div> */}

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
