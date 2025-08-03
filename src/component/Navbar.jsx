"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-gradient-to-l from-black via-[#6c00ff] to-black">
      <nav className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2 text-2xl font-bold px-4 py-2 rounded-md">
          {/* Your original Next.js Image component */}
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <span className="text-white">OUTMAIL</span>
        </div>

        {/* Hamburger Menu - Visible on mobile, hidden on medium screens and up */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Hamburger SVG icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex flex-grow justify-center space-x-6 text-white text-sm font-medium">
          <a href="/" className="hover:text-[#AD46FF] transition">Home</a>
          <a href="/Aboutus" className="hover:text-[#AD46FF] transition">About Us</a>
          <a href="/Pricing" className="hover:text-[#AD46FF] transition">Pricing</a>
          <a href="/Contactus" className="hover:text-[#AD46FF] transition">Contact Us</a>
        </div>

        {/* CTA Buttons - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="text-white bg-[#AD46FF] font-semibold rounded-full px-4 py-1.5 hover:bg-[#c289f0] transition-colors"
          >
            Login
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Conditionally rendered to dim the background */}
      {isOpen && (
        <div 
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}

      {/* Mobile Menu - The actual sliding menu */}
      <div className={`
        fixed top-0 right-0 h-screen w-full bg-black text-white flex flex-col p-8 space-y-8
        transition-transform duration-500 ease-in-out z-50 md:hidden
        ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
      `}>
        {/* Close button at the top right of the menu */}
        <div className="self-end">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center space-y-6 text-xl font-medium">
          <a href="/" className="hover:text-[#AD46FF] transition" onClick={toggleMenu}>Home</a>
          <a href="/Aboutus" className="hover:text-[#AD46FF] transition" onClick={toggleMenu}>About Us</a>
          <a href="/Pricing" className="hover:text-[#AD46FF] transition" onClick={toggleMenu}>Pricing</a>
          <a href="/Contactus" className="hover:text-[#AD46FF] transition" onClick={toggleMenu}>Contact Us</a>
          <a
            href="#"
            className="text-white bg-[#AD46FF] font-semibold rounded-full px-8 py-2 hover:bg-[#c289f0] transition-colors mt-6"
            onClick={toggleMenu}
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
