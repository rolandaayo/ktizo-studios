/* eslint-disable no-unused-vars */
import React from 'react'

export default function Hero() {
  return (
    <div className="bg-[#f7f2d5]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-20">
        <div className="flex text-center bg-[url('/images/IMG_7949.jpg')] bg-cover bg-center bg-no-repeat h-[30vh] w-full text-white items-center">
          <div className="text-white w-full h-full flex items-center justify-center">
            <h1 className="text-xl md:text-2xl">Recording</h1>
          </div>
        </div>
        <div className="flex text-center bg-[url('/images/IMG_7955.jpg')] bg-cover bg-center bg-no-repeat h-[30vh] w-full text-white items-center">
          <div className="text-white w-full h-full flex items-center justify-center">
            <h1 className="text-xl md:text-2xl">Performance</h1>
          </div>
        </div>
        <div className="flex text-center bg-[url('/images/IMG_7962.jpg')] bg-cover bg-center bg-no-repeat h-[30vh] w-full text-white items-center">
          <div className="text-white w-full h-full flex items-center justify-center">
            <h1 className="text-xl md:text-2xl">Freestyle</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-32">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl">RECORDING STUDIO LAGOS</h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quos vitae non ipsam doloremque animi optio beatae tempore suscipit
            atque iusto distinctio voluptatum quo assumenda voluptate ab,
            blanditiis, consequuntur nobis.
          </p>
          <p className="text-sm md:text-base">
            We specialise in music production in London and have a passionate,
            friendly and highly experienced music production team who are
            capable of catering to your every audio requirement. With extended
            experience in recording, production, mixing and mastering, we have
            the best sound engineers and producers to assist you with your
            projects in the very best recording studio in London.
          </p>
          <p className="text-sm md:text-base">
            We specialise in music production in London and have a passionate,
            friendly and highly experienced music production team who are
            capable of catering to your every audio requirement. With extended
            experience in recording, production, mixing and mastering, we have
            the best sound engineers and producers to assist you with your
            projects in the very best recording studio in London.
          </p>
        </div>
        <img
          className="w-full h-full object-cover"
          src="/images/DSC07907-Edit.jpg"
          alt=""
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-24">
        <img
          className="w-full h-full object-cover order-2 md:order-1"
          src="/images/IMG_7955.jpg"
          alt=""
        />
        <div className="space-y-4 order-1 md:order-2">
          <h1 className="text-2xl md:text-3xl">RECORDING STUDIO LAGOS</h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quos vitae non ipsam doloremque animi optio beatae tempore suscipit
            atque iusto distinctio voluptatum quo assumenda voluptate ab,
            blanditiis, consequuntur nobis.
          </p>
          <p className="text-sm md:text-base">
            We specialise in music production in London and have a passionate,
            friendly and highly experienced music production team who are
            capable of catering to your every audio requirement. With extended
            experience in recording, production, mixing and mastering, we have
            the best sound engineers and producers to assist you with your
            projects in the very best recording studio in London.
          </p>
          <p className="text-sm md:text-base">
            We specialise in music production in London and have a passionate,
            friendly and highly experienced music production team who are
            capable of catering to your every audio requirement. With extended
            experience in recording, production, mixing and mastering, we have
            the best sound engineers and producers to assist you with your
            projects in the very best recording studio in London.
          </p>
        </div>
      </div>

      <div className="relative bg-[url('/images/IMG_7927.jpg')] bg-cover bg-center bg-no-repeat h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <h1 className="text-xl md:text-2xl mb-4">
              I had an incredible experience. The staff have so much to{" "}
              <br className="hidden md:block" /> offer and cover so many different
              areas of music.
            </h1>
            <p className="text-sm md:text-base">Luke Glazewski, Graduate 2019</p>
            <a href='/contact' className="inline-block mt-4 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 animate-bounce">
            CONTACT US
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}
