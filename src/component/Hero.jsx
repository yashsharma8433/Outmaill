import React from 'react';
import AboutUs from '@/component/aboutuscontent';
import { HeroScrollDemo } from './heroscroll';
import StackingCards from './stackcards';

function Hero() {
  return (
    <div>
     
      <div className="bg-[linear-gradient(to_bottom,#000,#200D42_30%,#4F21A1_50%,#A46EDB_70%,#FFFFFF_100%)] min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block  px-4 py-1 border-white/30 rounded-md pt-10">
            <span className="text-[#C0C0C0] hover:text-purple-400 transition font-syne text-base">
              Welcome to Outmail
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-syne font-bold tracking-wide mt-6">
            Land Jobs 3x Faster — We
          </h1>
          <h2 className="text-4xl sm:text-5xl font-syne font-bold tracking-wide mt-2">
            Apply for You!
          </h2>

          <p className="text-[#C0C0C0] text-base sm:text-lg mt-6 leading-relaxed">
            Automate your job search, create stunning resumes, and track every application — all in
            <br />
            <span className="block mt-2">one place.</span>
          </p>

          <div className="mt-8">

          <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">Get Started</button>


         
          </div>
        </div>
      </div>
      {/* <HeroScrollDemo /> */}
     <div className='-mt-130'><StackingCards/></div> 
    </div>
  );
}

export default Hero;
