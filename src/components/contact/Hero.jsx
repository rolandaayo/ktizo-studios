/* eslint-disable no-unused-vars */
import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[#f7f2d5]'>
        <div className="flex items-center justify-center p-8 md:p-32 bg-[url('/images/IMG_3253.jpg')] bg-cover bg-center bg-no-repeat h-[30vh] md:h-[40vh] text-white text-2xl md:text-4xl transition-all duration-300 shadow-lg rounded-lg">
            <h1 className="transform hover:scale-105 transition-transform duration-300 font-bold text-shadow">CONTACT US</h1>
        </div>
        <section>
        <iframe className="w-full p-4 md:p-16 transition-all duration-300 rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.3526227118628!2d3.4883684081639386!3d6.431896948836624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5ce228258d1%3A0xb5eeea1ce8df9c8e!2sStillwaters%20Garden%20Estate%2C%20Lekki%20Penninsula%20II%20106104%2C%20Lekki%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1673956709624!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <section className="py-6 md:py-12 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-4 md:p-16">
                <div className="space-y-6 md:space-y-8 w-full md:w-1/2">
                    <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-white p-4 rounded-lg shadow-md">
                        <i className="text-xl md:text-2xl text-gray-600"></i>
                        <span>
                            <h5 className="text-base md:text-lg font-semibold">Stillwaters garden estate, ikate</h5>
                            <p className="text-sm md:text-base text-gray-600">Lagos, Nigeria</p>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-white p-4 rounded-lg shadow-md">
                        <i className="text-xl md:text-2xl text-gray-600"></i>
                        <span>
                            <h5 className="text-base md:text-lg font-semibold">+234 701 819 1679</h5>
                            <p className="text-sm md:text-base text-gray-600">Mondays to Saturdays, 10am to 6pm</p>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 bg-white p-4 rounded-lg shadow-md">
                        <i className="text-xl md:text-2xl text-gray-600"></i>
                        <span>
                            <h5 className="text-base md:text-lg font-semibold">tryphyb@gmail.com</h5>
                            <p className="text-sm md:text-base text-gray-600">Contact us via Email</p>
                        </span>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <form action="mailto:ibiwoyeroland@gmail.com" className="space-y-4">
                        <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-500 shadow-sm" type="text" placeholder="Enter Your Name" required />
                        <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-500 shadow-sm" type="email" placeholder="Enter Email Address" required />
                        <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-500 shadow-sm" type="text" placeholder="Enter Your Subject" required />
                        <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-500 shadow-sm" rows="8" placeholder="Message" required></textarea>
                        <button type="submit" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}
