
import React from 'react';
import StackingCards from './stackcards';

const MembershipBenefits = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center">
          <p className="text-indigo-600 uppercase tracking-wide font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Unlock Exclusive Membership Benefits
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Commodo nec mi id ullamcorper vitae augue neque quis nunc lacinia viverra orci diam.
          </p>

          {/* Benefit List */}
          <ul className="space-y-4">
            <li className="flex items-center">
              {/* You can replace this SVG with a proper icon library like Heroicons */}
              <svg className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-xl font-medium text-gray-800">Access to Exclusive Content</span>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-xl font-medium text-gray-800">Networking Opportunities</span>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-xl font-medium text-gray-800">Discounts and Special Offers</span>
            </li>
          </ul>
        </div>

        {/* Right Section - Placeholder Box */}
        <div className="bg-purple-300 rounded-2xl w-full h-96 lg:h-[500px] shadow-lg flex items-center justify-center">
        

          {/* You can place an image or more complex content here */}
          {/* <p className="text-white text-2xl font-bold">Placeholder for Image/Content</p> */}
        </div>

      </div>
    </section>
  );
};

export default MembershipBenefits;