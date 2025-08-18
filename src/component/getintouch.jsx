// components/ContactUs.jsx
"use client";
import React, { useState } from "react";
import { Phone, Clock, Twitter, Linkedin, Instagram } from "lucide-react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", { name, email, message });
    // In a real application, you would send this data to a backend API.
  };

  return (
    <div className="bg-gradient-to-l from-black via-[#6c00ff] to-black flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 font-inter">
      
      <div className="mt-20 max-w-6xl w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 text-white">
        
        {/* Left Column: Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Placeholder box */}
          <div className="bg-white/20 rounded-xl h-64 w-full flex items-center justify-center text-white text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Placeholder for Image/Map
          </div>

          {/* Phone Number */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-white/20 rounded-full text-white">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-lg">Phone Number</p>
              <p className="text-white/70">+123 456 789 101</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-white/20 rounded-full text-white">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-lg">Business Hours</p>
              <p className="text-white/70">Monday - Friday / 8AM to 5PM</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-white/20 rounded-full text-white hover:bg-purple-600 hover:text-white transition duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white/20 rounded-full text-white hover:bg-purple-600 hover:text-white transition duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white/20 rounded-full text-white hover:bg-purple-600 hover:text-white transition duration-200">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Facilisis commodo mattis neque nulla ultrices mattis sed. Ullamcorper tempus mattis ac tristique gravida ornare faucibus suspendisse.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200" 
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Write your message here..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 resize-y" >
              </textarea>
            </div>

            <div className="flex justify-center">
              <button 
                type="submit" 
                className="flex justify-center w-full sm:w-auto px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200">
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
