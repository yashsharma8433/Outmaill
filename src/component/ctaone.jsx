'use client';
import React from 'react';
import CountUp from 'react-countup';

export default function CtaOne() {
  return (
    <div className= " bg-white text-black py-20 px-4 bg-gradient-to-l from-black via-[#6c00ff] to-black">
      {/* Insights Section */}
      <div className="max-w-6xl mx-auto text-center mt-30">
        <p className="text-sm text-[#6c00ff] font-medium mb-2">Outmail Insight</p>
        <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">Insights into the Job Landscape</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-12 text-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-[#ffff]">
              <CountUp end={41.5} duration={2.5} decimals={1} suffix="%" />
            </h3>
            <p className="text-white">AI Dominance</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#ffff]">
              <CountUp end={2.5} duration={2.5} decimals={1} suffix=" T" />
            </h3>
            <p className="text-white">Total Market Capitalization</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#ffff]">
              <CountUp end={300} duration={2.5} suffix=" B" />
            </h3>
            <p className="text-white">24-Hour Applying</p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-l from-black via-[#6c00ff] to-black rounded-2xl p-20 flex  border border-white  flex-col md:flex-row justify-between items-center shadow-xl">
          <div className="text-white max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Unlock Your AI-JOB Potential</h3>
            <p className="mb-6 text-white/80">
              Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Get Started Now
            </button>
          </div>
          <img
            src="../../header.png"
            alt="AI Job Potential"
            className="w-64 mt-10 md:mt-0 md:ml-8 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
