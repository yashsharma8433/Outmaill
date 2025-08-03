import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import React from "react";

function GetInTouch() {
  return (
    // Main container for the Get In Touch section
    <div className="bg-gradient-to-l from-black via-[#6c00ff] to-black flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 font-inter">
      {/* Inner container with max width and rounded corners */}
      <div className="mt-20 max-w-6xl w-full bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Column: Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Placeholder box */}
          <div className="bg-purple-200 rounded-xl h-64 w-full flex items-center justify-center text-purple-600 text-lg font-semibold">
            Placeholder for Image/Map
          </div>

          {/* Phone Number */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">Phone Number</p>
              <p className="text-gray-600">+123 456 789 101</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">Business Hours</p>
              <p className="text-gray-600">Monday - Friday / 8AM to 5PM</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition duration-200">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Facilisis commodo mattis neque nulla ultrices mattis sed. Ullamcorper tempus mattis ac tristique gravida ornare faucibus suspendisse.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message here..." className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-y" ></textarea>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="flex justify-center w-full sm:w-auto px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
