/* eslint-disable no-unused-vars */
import React from "react";

export default function Header() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 bg-[#f7f2d5] ">
      <div className="flex-col text-center bg-[url('/images/IMG_3253.jpg')] bg-cover bg-center bg-no-repeat h-[40vh] md:h-[60vh] text-white items-center animate-fade-in">
        <div className="text-white w-full h-full justify-center py-20 md:py-40 px-4">
          <h1 className="text-2xl md:text-4xl mb-4 animate-slide-down">
            Welcome to KTIZO STUDIOS
          </h1>
          <p className="text-sm md:text-base animate-slide-up">
            Ktizo Studios is a specialist music production school and the
            training ground <br className="hidden md:block" />
            for the next generation of music producers and sound engineers.
          </p>
          <a href="/contact" className="inline-block mt-4 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 animate-bounce ">
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
}
