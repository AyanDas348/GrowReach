import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  GlobeAltIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

const solutions = [
  { name: 'Content Creation', description: 'Get a better understanding of your traffic', href: '/services', icon: ChartPieIcon },
  { name: 'Business Consultancy', description: 'Speak directly to your customers', href: '/services', icon: CursorArrowRaysIcon },
  { name: 'Social Media Management', description: "Your customers' data will be safe and secure", href: '/services', icon: FingerPrintIcon },
  { name: 'Branding Solutions', description: 'Connect with third-party tools', href: '/services', icon: SquaresPlusIcon },
  { name: 'Website Development', description: 'Build strategic funnels that will convert', href: '/services', icon: GlobeAltIcon },
  { name: 'SEO', description: 'Build strategic funnels that will convert', href: '/services', icon: DocumentMagnifyingGlassIcon },
  { name: 'Influential Marketing', description: 'Build strategic funnels that will convert', href: '/services', icon: SparklesIcon },
  { name: 'Ads', description: 'Build strategic funnels that will convert', href: '/services', icon: FunnelIcon },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-black relative z-50">
          <header className="fixed inset-x-0 top-0 z-60 transition before:bg-transparent after:bg-black">
            <nav className="flex items-center justify-between p-6 lg:px-8 lg:w-8/12" aria-label="Global">
              <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src=""
                    alt="Company icon"
                  />
                </Link>
              </div>
              <div className="flex lg:hidden px-9">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white left-20"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Link to="/" className="text-sm font-semibold leading-6 text-white-900">
            Home
          </Link>
          <Link to='/about' className="text-sm font-semibold leading-6 text-white-900">
            About
          </Link>
          <Popover className="relative bg-transparent">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/pricing" className="text-sm font-semibold leading-6 text-white-900">
            Pricing
          </Link>
          <Link to="/contact" className="text-sm font-semibold leading-6 text-white-900">
            Reach Us
          </Link>
          </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/10">
                    <div className="space-y-2 py-6" >
                      {navigation.map((item) => (
                        <div onClick={() => setMobileMenuOpen(false)}>
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                        >
                          {item.name}
                        </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>
        </div>
    )
  }
          