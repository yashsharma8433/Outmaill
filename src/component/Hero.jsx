import React from 'react';
import Image from 'next/image';
import headerimg from '@/assets/header.png'
import AboutUs from '@/component/aboutuscontent';

function Hero() {
  return (
    <div>
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_40%,#4F21A1_65%,#A46EDB_100%,#ffff_150%)] py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block  px-4 py-1 border-white/30 rounded-md">
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
          <button className="bg-white hover:text-purple-600 text-black font-medium rounded-full px-6 py-2 transition">
            Get Started For Free!
          </button>
        </div>

        <div className=' flex justify-center pt-20'>
  <Image
    src={headerimg}
    alt="outmail"
    width={700} 
    height={500} 
    className="rounded-2xl" // or use rounded-full for a circle
  />
</div>
      </div>
  
    </div>

    </div>
    
  );
}

export default Hero;
