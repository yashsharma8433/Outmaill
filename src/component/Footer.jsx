import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#000000] to-[#6c00ff] text-white px-4 pt-20 pb-10 relative rounded-t-[100px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold mb-2">💌 OUTMAIL</h2>
          <p className="text-white/70 mb-6">
            Integer sit quisque sed at. Fermentum nunc aliquet cursus eget. Egestas ornare.
          </p>
          <ul className="flex flex-wrap gap-4 text-sm text-white/80">

            <li><a href="/Aboutus">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected:<br />Subscribe to OUTMAIL Updates</h3>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-full text-black w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-4 text-center text-sm text-white/50">
        © 2025 Outmail. All rights reserved. <span className="block mt-1">Designed by Yash</span>
      </div>
    </footer>
  );
}
