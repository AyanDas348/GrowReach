import React from 'react'

const About = () => {
  return (
    <section className='bg-section2 bg-no-repeat bg-cover'>
        <div className="sm:mx-60 mx-10 sm:max-w-[45%] py-32 sm:py-48 lg:py-56 w-70 snap-always relative">
          <div className="items-start">
            <h1 className="text-xl font-bold tracking-tight text-white-900 sm:text-8xl">
              Who we are
            </h1>
            <p className="mt-6 text-sm sm:text-2xl leading-8 text-white-600">
            We are a team of dedicated experts, we offer comprehensive digital marketing solutions tailored to your unique needs. 
            </p>
            <p className="mt-6 text-sm sm:text-2xl leading-8 text-white-600">
            We understand that every business is different, 
            and that's why we take a personalized approach to deliver exceptional results.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/services"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Find our more<span aria-hidden="true">   →</span>
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About