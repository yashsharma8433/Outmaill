import React from 'react';

function GetInTouch() {
  return (
    // Main container for the Get In Touch section
    // Uses flexbox for layout, responsive padding, and background color
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-inter">
      {/* Container for the content, with max width and rounded corners */}
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* Left Section: Get In Touch Heading and Contact Form */}
        {/* This section contains the main heading, descriptive text, and the form inputs */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Facilisis commodo mattis neque nulla ultrices mattis sed. Ullamcorper tempus mattis ac tristique gravida ornare faucibus suspendisse.
          </p>

          <form className="space-y-6">
            {/* Your Name Input Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              />
            </div>

            {/* Your Email Input Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              />
            </div>

            {/* Your Message Textarea Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Writing your message here..."
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-y"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Placeholder, Contact Info, and Social Media */}
        {/* This section contains the large placeholder box, phone number, business hours, and social media links */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Placeholder for the large purple box (e.g., for an image or map) */}
          <div className="bg-purple-200 rounded-xl h-64 w-full flex items-center justify-center text-purple-600 text-lg font-semibold">
            {/* You can replace this with an actual image or map component */}
            Placeholder for Image/Map
          </div>

          {/* Phone Number Contact Detail */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full text-purple-600">
              {/* Phone icon (using inline SVG for direct embedding) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">Phone Number</p>
              <p className="text-gray-600">+123 456 789 101</p>
            </div>
          </div>

          {/* Business Hours Contact Detail */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full text-purple-600">
              {/* Clock icon (using inline SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">Business Hours</p>
              <p className="text-gray-600">Monday - Friday / 8AM to 5PM</p>
            </div>
          </div>

          {/* Follow Us Section with Social Media Icons */}
          <div>
            <p className="text-gray-900 font-semibold text-lg mb-4">Follow Us:</p>
            <div className="flex space-x-4">
              {/* Facebook Icon Link */}
              <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Twitter Icon Link */}
              <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-19 11.6 1.1.8 3 2.2 5 2.2 1.4 0 2.8-.2 4-1.2 5.2-4.2 4.2-11.7 4.2-11.7-.2-.5-.4-1-.7-1.5 0 0 2.7-2.6 3.4-5 .2-.2.4-.5.6-.8z"/>
                </svg>
              </a>
              {/* LinkedIn Icon Link */}
              <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Instagram Icon Link */}
              <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
