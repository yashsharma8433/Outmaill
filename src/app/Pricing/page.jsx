import Navbar from '@/component/Navbar'
import Hero from '@/component/Hero'
import React from 'react'
import AboutUs from '@/component/aboutuscontent'
import Pricing from '@/component/pricing'
import Footer from '@/component/Footer'
import Faq from '@/component/faq'
import Testimonials from '@/component/Testimonials'


function page() {
  return (
    <div>
      <Navbar/>

      <div className="bg-[linear-gradient(to_bottom,#000,#200D42_20%,#4F21A1_45%,#A46EDB_60%,#FFFFFF_100%)] py-20">   
      

      <div className="container mx-auto px-4 text-center">
        <div className="inline-block  px-4 py-1 border-white/30 rounded-md">

        </div>

        <h1 className="text-4xl sm:text-5xl font-syne font-bold tracking-wide mt-6">
          Pricing
        </h1>


        <p className="text-[#C0C0C0] text-base sm:text-lg mt-6 leading-relaxed">
          Automate your job search, create stunning resumes, and track every application — all in
          <br />
          <span className="block mt-2">one place.</span>
        </p>

        <div className="mt-8">
          <button className="bg-white hover:text-purple-600 text-black font-medium rounded-full px-6 py-2 transition">
            Scroll to Know More!
          </button>
        </div>


      </div>
      </div>
      <AboutUs/>
      <Pricing/>
      <Testimonials/>
      <Faq/>
      <Footer/>

    </div>
  )
}

export default page
