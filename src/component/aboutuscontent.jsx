'use client';
import React from 'react';

export default function AboutUs() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-20 bg-white text-center">
      <p className="text-sm text-indigo-600 font-medium mb-2">About Us</p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Unveiling outmail Story</h2>
      <p className="text-gray-500 max-w-2xl mx-auto">
        Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. <br />
        Nibh est vitae suspendisse parturient sed lorem eu.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center mt-16 gap-12">
        {/* Left side image block */}
        <div className="bg-purple-400 w-[300px] h-[300px] md:w-[450px] md:h-[350px] rounded-[40px]"></div>

        {/* Timeline */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">Founding and Early Years</h3>

          {[
            { year: "2005", desc: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi." },
            { year: "2007", desc: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi." },
            { year: "2010", desc: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 mb-6">
              <span className="bg-purple-100 text-purple-600 font-medium px-4 py-2 rounded-xl text-sm shadow-sm">{item.year}</span>
              <p className="text-gray-500 text-sm max-w-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
