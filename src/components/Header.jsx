/* eslint-disable no-unused-vars */
import React from "react";

export default function Header() {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 bg-[#f7f2d5]">
      <div className="flex-col text-center bg-[url('/images/IMG_3253.jpg')] bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[55vh] md:h-[60vh] text-white items-center animate-fade-in relative">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-white w-full h-full flex flex-col justify-center py-12 sm:py-16 md:py-40 px-3 sm:px-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 animate-slide-down">
            Welcome to KTIZO STUDIOS
          </h1>
          <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Ktizo Studios is a specialist music production school and the
            training ground <br className="hidden md:block" />
            for the next generation of music producers and sound engineers.
          </p>
          <a href="/contact" className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 animate-bounce text-sm sm:text-base mx-auto">
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
}