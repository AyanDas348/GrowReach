import React from 'react'

const About = () => {
  return (
    <section className='bg-section2 bg-no-repeat bg-cover'>
        <div className="sm:mx-60 mx-10 sm:max-w-[45%] py-32 sm:py-48 lg:py-56 w-70 snap-always relative">
          <div className="items-start">
          <p className="mt-6 text-sm sm:text-base leading-8 text-white-600">
            About Us
            </p>
            <h1 className="text-xl font-bold tracking-tight text-white-900 sm:text-6xl py-5">
            ACCELERATING GROWTH AT THE NEW INTERSECTION OF MEDIA 
            </h1>
            <p className="mt-6 text-sm sm:text-2xl leading-8 text-white-600">
            Our unique understanding of the intersection of culture, content, data, and technology powers how we build brands out of every moment of connection.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/services"
                className="text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Welcome to Grow Reach<span aria-hidden="true">   →</span>
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About
