import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';

function Navbar() {
  return (
    <header className="w-full bg-gradient-to-l from-black via-[#6c00ff] to-black ">
      <nav className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2 text-2xl font-bold px-4 py-2 rounded-md">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <span className="text-white">OUTMAIL</span>
        </div>

        {/* Nav Links Centered Absolutely */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-white text-sm font-medium">
          <a href="/" className="hover:text-[#AD46FF] transition">Home</a>
          <a href="/Aboutus" className="hover:text-[#AD46FF] transition">About Us</a>
          <a href="/Pricing" className="hover:text-[#AD46FF] transition">Pricing</a>
          <a href="/Contactus" className="hover:text-[#AD46FF] transition">Contact Us</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center">
  <a
    href="#"
    className="text-white bg-[#AD46FF] font-semibold rounded-full px-4 py-1.5 hover:bg-[#c289f0] transition-colors"
  >
    Login
  </a>
</div>

      </nav>
    </header>
  );
}

export default Navbar;
