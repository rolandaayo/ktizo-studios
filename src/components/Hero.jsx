/* eslint-disable no-unused-vars */
import React from 'react'

export default function Hero() {
  return (
    <div  className="bg-[#f7f2d5]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-5 justify-evenly w-full p-6 md:p-20">
        <div className="flex text-center bg-[url('/images/IMG_7949.jpg')] bg-cover bg-center bg-no-repeat h-[30vh] w-full md:w-80 text-white items-center">
          <div className="text-white w-full h-full justify-center py-40">
            <h1 className="text-xl md:text-2xl">Recording</h1>
          </div>
        </div>
        <div className="flex text-center bg-[url('/images/IMG_7955.jpg')] bg-cover bg-center bg-no-repeat h-[30vh] w-full md:w-80 text-white items-center">
          <div className="text-white w-full h-full justify-center py-40">
            <h1 className="text-xl md:text-2xl">Performance</h1>
          </div>
        </div>
        <div className="flex text-center bg-[url('/images/IMG_7962.jpg')] bg-cover bg-center bg-no-repeat h-[30vh] w-full md:w-80 text-white items-center">
          <div className="text-white w-full h-full justify-center py-40">
            <h1 className="text-xl md:text-2xl">Freestyle</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly w-full p-6 md:p-32">
        <div className="mb-8 md:mb-0 md:mr-5 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl mb-4">RECORDING STUDIO LONDON</h1>
          <p className="mb-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quos vitae non ipsam doloremque animi optio beatae tempore suscipit
            atque iusto distinctio voluptatum quo assumenda voluptate ab,
            blanditiis, consequuntur nobis.
          </p>
          <p className="mb-4 text-sm md:text-base">
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
          className="w-full md:w-[50%]"
          src="/images/DSC07907-Edit.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly w-full p-6 md:p-24">
        <img
          className="w-full md:w-[50%] mb-8 md:mb-0"
          src="/images/IMG_7955.jpg"
          alt=""
        />
        <div className="md:ml-5 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl mb-4">RECORDING STUDIO LONDON</h1>
          <p className="mb-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quos vitae non ipsam doloremque animi optio beatae tempore suscipit
            atque iusto distinctio voluptatum quo assumenda voluptate ab,
            blanditiis, consequuntur nobis.
          </p>
          <p className="mb-4 text-sm md:text-base">
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

      <div className="flex-col text-center bg-[url('/images/IMG_7927.jpg')] bg-cover bg-center bg-no-repeat h-[40vh] md:h-[50vh] text-white items-center">
        <div className="text-white w-full h-full justify-center py-20 md:py-40 px-4">
          <h1 className="text-xl md:text-2xl mb-4">
            I had an incredible experience. The staff have so much to{" "}
            <br className="hidden md:block" /> offer and cover so many different
            areas of music.
          </h1>
          <p className="text-sm md:text-base">Luke Glazewski, Graduate 2019</p>
        </div>
      </div>
    </div>
  )
}
