/* eslint-disable no-unused-vars */
import React from 'react'

export default function Hero() {
  return (
    <div className="bg-[#f7f2d5]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-10 md:p-20">
        <div className="flex text-center bg-[url('/images/IMG_7949.jpg')] bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[35vh] w-full text-white items-center transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg">
          <div className="text-white w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold">Recording</h1>
          </div>
        </div>
        <div className="flex text-center bg-[url('/images/IMG_7955.jpg')] bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[35vh] w-full text-white items-center transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg">
          <div className="text-white w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold">Performance</h1>
          </div>
        </div>
        <div className="flex text-center bg-[url('/images/IMG_7962.jpg')] bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[35vh] w-full text-white items-center transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg sm:col-span-2 md:col-span-1">
          <div className="text-white w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold">Freestyle</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-16 md:p-24">
        <div className="space-y-6 p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">RECORDING STUDIO LAGOS</h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We specialise in music production in Lagos and have a passionate,
            friendly and highly experienced music production team who are
            capable of catering to your every audio requirement. With extended
            experience in recording, production, mixing and mastering, we have
            the best sound engineers and producers to assist you with your
            projects in the very best recording studio in Lagos.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We specialise in music production in Lagos and have a passionate,
            friendly and highly experienced music production team who are
            capable of catering to your every audio requirement. With extended
            experience in recording, production, mixing and mastering, we have
            the best sound engineers and producers to assist you with your
            projects in the very best recording studio in Lagos.
          </p>
        </div>
        <img
          className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg shadow-xl"
          src="/images/DSC07907-Edit.jpg"
          alt="Studio equipment"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-16 md:p-24">
        <img
          className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg shadow-xl order-2 md:order-1"
          src="/images/IMG_7955.jpg"
          alt="Studio performance"
        />
        <div className="space-y-6 p-4 order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">RECORDING STUDIO LAGOS</h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We specialise in music production in Lagos and have a passionate,
            friendly and highly experienced music production team who are
            capable of catering to your every audio requirement. With extended
            experience in recording, production, mixing and mastering, we have
            the best sound engineers and producers to assist you with your
            projects in the very best recording studio in Lagos.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We specialise in music production in Lagos and have a passionate,
            friendly and highly experienced music production team who are
            capable of catering to your every audio requirement. With extended
            experience in recording, production, mixing and mastering, we have
            the best sound engineers and producers to assist you with your
            projects in the very best recording studio in Lagos.
          </p>
        </div>
      </div>

      <div className="relative bg-[url('/images/IMG_7927.jpg')] bg-cover bg-center bg-no-repeat h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-center px-4 max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              “I had an incredible experience. The staff have so much to offer and cover so many different areas of music.”
            </h1>
            <p className="text-lg md:text-xl italic mb-8">Luke Glazewski, Graduate 2019</p>
            <a href='/contact' className="inline-block px-8 py-3 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}