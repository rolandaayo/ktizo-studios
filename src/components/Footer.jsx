/* eslint-disable no-unused-vars */
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#f7f2d5] to-[#f5edc8] text-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-amber-600 pb-2 inline-block">About Us</h3>
            <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-amber-600 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-amber-600 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <span>info@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <span>123 Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-200 mt-12 pt-8 text-center">
          <p className="text-gray-700">© 2024 rolandaayo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}