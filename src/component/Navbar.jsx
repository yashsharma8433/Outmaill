import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';

function Navbar() {
  return (
    <header className="w-full bg-black">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2 text-2xl font-bold px-4 py-2 rounded-md">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <span>OUTMAIL</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <a href="/" className="hover:text-[#8B8D98] transition">Home</a>
          <a href="/Aboutus" className="hover:text-[#8B8D98] transition">About Us</a>
          <a href="/Pricing" className="hover:text-[#8B8D98] transition">Pricing</a>
          <a href="/Contactus" className="hover:text-[#8B8D98] transition">Contact Us</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">Signup</button>
          <a href="#" className="text-white hover:text-[#8B8D98] transition">Login</a>
        </div>
      </nav>
      
    </header>
  );
}

export default Navbar;
