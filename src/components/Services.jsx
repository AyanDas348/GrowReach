import React from 'react'
import SlideUp from '../pages/SlideUp'
const Services = () => {
  return (
    <section className='bg-section4 bg-cover'>
      <div className='sm:w-1/2'></div>
      <div className="sm:mx-96 mx-10 py-32 sm:py-48 lg:py-56 snap-always sm:my-3">
          <div className="items-start">
            <h1 className="text-xl font-bold tracking-tight text-white-900 sm:text-8xl">
              What we offer
            </h1>
            <p className="mt-6 text-sm sm:text-2xl leading-8 text-white-600">
            Powerful Digital Marketing Solutions to Propel Your Business Forward
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <p
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                SEO
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services