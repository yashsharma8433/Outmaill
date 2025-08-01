import React from 'react';
import { Quote } from 'lucide-react';
import Flip from './flip';
import CardSwipeDemo from './swipe';
import StaggerTestimonials from './ui/stagger-testimonials';

export default function Testimonials() {
 
  return (
    <div className=" text-black px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Outmail Testimonials</h2>

        <div className="flex items-start justify-center gap-4 mb-12 max-w-4xl mx-auto">
          <Quote size={36} className="text-[#6c00ff] mt-2" />
          <p className="text-gray-600 text-lg text-left">
            "Joining this platform was a game-changer for me. The educational resources helped me
            understand crypto trading, and the community support is invaluable. Highly recommended!"
          </p>
        </div>

        {/* Profiles */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6"> <Flip/>
          {people.map((person, index) => (
            <div key={index} className="text-center">
              <div className="w-full aspect-square rounded-xl bg-purple-200 mx-auto mb-4" />
              <h4 className="font-semibold">{person.name}</h4>
              <p className="text-sm text-gray-600">{person.role}</p>
            </div>
          ))}
        </div> */}
        {/* <div className='py-5'><CardSwipeDemo/></div> */}
      <div> <StaggerTestimonials/></div> 


      </div>
    </div>
  );
}
