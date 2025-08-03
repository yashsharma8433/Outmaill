'use client';
import React from 'react';
import FlipMaskCard from './flipmask';

export default function AboutUs() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 py-20 bg-gradient-to-l from-black via-[#6c00ff] to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="flex-1 text-left">
          <p className="text-sm font-medium text-indigo-300 uppercase tracking-wider mb-2">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unveiling Our Story
          </h2>
          <p className="text-white/90 max-w-2xl text-base md:text-lg leading-relaxed mb-10">
            Discover how we started and evolved over time. From humble beginnings
            to powerful innovations—our journey defines who we are today.
          </p>

          <h3 className="text-2xl font-semibold mb-6">Founding & Early Years</h3>
          {[
            {
              year: '2005',
              desc: 'Our foundation year—where vision met action. With a small team and big dreams, we started building from scratch.',
            },
            {
              year: '2007',
              desc: 'First milestones achieved. With steady growth, we expanded our capabilities and built long-lasting client trust.',
            },
            {
              year: '2010',
              desc: 'Marked our entry into global markets. Our dedication and innovation started turning heads worldwide.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 mb-6 group transition-all duration-300"
            >
              <span className="bg-white text-[#630dff] font-semibold px-4 py-2 rounded-xl text-sm shadow-md border border-white group-hover:bg-[#ad46ff] group-hover:text-white transition">
                {item.year}
              </span>
              <p className="text-white/90 text-sm max-w-md leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT: CARD OR IMAGE */}
        <div className="flex-1 w-full max-w-md">
          <FlipMaskCard />
        </div>
      </div>
    </section>
  );
}
