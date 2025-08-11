import React from 'react';
import AboutUs from '@/component/aboutuscontent';
import { HeroScrollDemo } from './heroscroll';
import StackingCards from './stackcards';
import { DotBackgroundDemo } from './dot';
import WrapButton from './ui/wrap-button';

function Hero() {
  return (
    <div>
    <div className="bg-gradient-to-l from-black via-[#6c00ff] to-black py-20 lg:py-32">
  <div className="container mx-auto px-4 text-center">
    <div className="inline-block px-4 py-1   rounded-md">
      <span className="text-[#C0C0C0] hover:text-purple-400 transition font-syne text-base">
        Welcome to Outmail
      </span>
    </div>

          <h1 className="text-4xl  text-white sm:text-5xl font-syne font-bold tracking-wide mt-6">
            Land Jobs 3x Faster — We
          </h1>
          <h2 className="text-4xl  text-white sm:text-5xl font-syne font-bold tracking-wide mt-2">
            Apply for You!
          </h2>

          <p className="text-[#C0C0C0] text-base sm:text-lg mt-6 leading-relaxed">
            Automate your job search, create stunning resumes, and track every application — all in
            <br />
            <span className="block mt-2">one place.</span>
          </p>

          <div className="mt-8">

          <div className="relative z-10 flex items-center justify-center space-x-4">
  {/* Get Started / WrapButton */}
  <button className="h-[50px] px-6 text-black font-extrabold rounded-full  transition flex items-center">
    <WrapButton />
  </button>

  {/* Watch Demo */}
  <button className="h-[50px] px-6 bg-transparent border border-white text-white font-bold rounded-full hover:text-[#AD46FF] transition flex items-center">
    Watch Demo
  </button>
</div>


         
          </div>
        </div>
      </div>
      {/* <HeroScrollDemo /> */}
     <div className='  
   -mt-10   /* small overlap for mobile */
    sm:-mt-14
    md:-mt-20
    lg:-mt-28
    xl:-mt-36  /* not too aggressive */



  
   bg-gradient-to-l from-black via-[#6c00ff] to-black '><StackingCards/></div> 
     
    </div>


   
  );
}

export default Hero;
