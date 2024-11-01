// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f7f2d5]">

      <section className="container mx-auto px-4">
        <nav className="flex flex-col md:flex-row justify-between items-center py-2">
          <div className="flex justify-between w-full md:w-auto items-center">
            <a
              className="w-32 md:w-40 transition-all duration-300 hover:scale-105"
              href="in.html"
            >
              <img src="/images/KTIZO studio.png" alt="Logo" />
            </a>
            <button
              className="md:hidden transform transition-transform duration-300 hover:rotate-180"
              onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:block mt-4 md:mt-0 w-full md:w-auto transform transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 md:translate-y-0 md:opacity-100"
            }`}
            id="navLinks"
          >
            <ul className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-5 justify-center text-sm md:text-base">
              <li>
                <a
                  className="hover:text-gray-600 transition-all duration-300 hover:scale-110 inline-block"
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-600 transition-all duration-300 hover:scale-110 inline-block"
                  href="about"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-600 transition-all duration-300 hover:scale-110 inline-block"
                  href="contact"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}
