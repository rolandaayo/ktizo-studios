/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='flex flex-col min-h-screen' >
        <Navbar />
          <div className="flex-grow">
            <div className="min-h-screen bg-[#f7f2d5] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">ABOUT US</h1>
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
                  <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                    Welcome to our music production studio! We are a passionate music production company with over 10 years of experience in crafting unique soundscapes and helping artists bring their vision to life.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                    Our studio is equipped with state-of-the-art recording equipment and software, allowing me to deliver professional-quality productions across various genres including Hip-Hop, R&B, Pop, and Electronic music.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Services</h2>
                      <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
                        <li>Music Production</li>
                        <li>Mixing & Mastering</li>
                        <li>Sound Design</li>
                        <li>Vocal Recording</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Equipment</h2>
                      <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
                        <li>Pro Tools</li>
                        <li>Logic Pro X</li>
                        <li>Ableton Live</li>
                        <li>Industry-Standard Plugins</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
    </div>
  )
}

export default About