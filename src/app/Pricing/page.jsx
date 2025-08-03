"use client";
import Navbar from '@/component/Navbar'
import Hero from '@/component/Hero'
import React from 'react'
import AboutUs from '@/component/aboutuscontent'
import Pricing from '@/component/pricing'
import Footer from '@/component/Footer'
import Faq from '@/component/faq'
import Testimonials from '@/component/Testimonials'
import MembershipBenefits from '@/component/membershipbenefits'


function page() {
  return (
    <div>
      <Navbar/>

      <div className="bg-gradient-to-l from-black via-[#6c00ff] to-black py-20">   
      

      <div className="container mx-auto px-4 text-center">
        <div className="inline-block  px-4 py-1 border-white/30 rounded-md">

        </div>

        <h1 className="text-4xl sm:text-5xl font-syne font-bold tracking-wide mt-3">
          Pricing
        </h1>


        <p className="text-[#C0C0C0] text-base sm:text-lg mt-6 leading-relaxed">
          Automate your job search, create stunning resumes, and track every application — all in
          <br />
          <span className="block mt-2">one place.</span>
        </p>

        <div className="text-center mt-10">
            <button
              onClick={() => {
                const missionSection = document.getElementById('pricing');
                missionSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full border-2 border-white text-white px-5 py-3 hover:bg-white hover:text-black transition duration-300"
            >
              ↓
            </button>
          </div>


      </div>
      </div>
      <div id="pricing"><MembershipBenefits/></div>
      <div><Pricing/></div>
      
      <Testimonials/>
      <Faq/>
      <Footer/>

    </div>
  )
}

export default page
