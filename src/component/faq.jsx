import React from 'react';

export default function Faq() {
  return (
    // Main container for the FAQ section
    // Uses responsive padding, max-width, and centers the content
    <section className="w-full py-20 px-4 sm:px-10 max-w-5xl mx-auto font-inter">
      {/* Subtitle for the section */}
      <p className="text-center text-purple-600 text-base font-semibold mb-2">Questions & Answers</p>
      {/* Main heading for the FAQ section */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Frequently Ask Questions</h2>
      {/* Introductory paragraph for the FAQ section */}
      <p className="text-center text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
        Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.
        Nibh est vitae suspendisse parturient sed lorem eu.
      </p>

      {/* Container for the FAQ items */}
      <div className="w-full space-y-4">
        {/* FAQ Item 1 */}
        <details className="group rounded-xl bg-white px-6 py-4 shadow-lg">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-800">
            What is outmail?
            {/* Dropdown arrow icon, rotates on open */}
            <span className="transition group-open:rotate-180 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>
          </summary>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Ultricies justo arcu sit donec nibh dictumst nulla ac. Dolor purus mauris quam tellus iaculis
            cursus ipsum elit sed. At enim duis sit fringilla. Lacus justo velit viverra iaculis pellentesque leo
            massa. Netus in in eu et rutrum venenatis. Nunc egestas nisl felis morbi.
          </p>
        </details>

        {/* FAQ Item 2 */}
        <details className="group rounded-xl bg-white px-6 py-4 shadow-lg">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-800">
            How do I buy outmail?
            <span className="transition group-open:rotate-180 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>
          </summary>
          <p className="mt-4 text-gray-700 leading-relaxed">
            You can sign up and choose a membership plan that suits your needs best.
          </p>
        </details>

        {/* FAQ Item 3 */}
        <details className="group rounded-xl bg-white px-6 py-4 shadow-lg">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-800">
            What is outmil?
            <span className="transition group-open:rotate-180 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>
          </summary>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Outmil is a similar platform to Outmail, offering exclusive content and benefits to its premium members.
          </p>
        </details>

        {/* FAQ Item 4 */}
        <details className="group rounded-xl bg-white px-6 py-4 shadow-lg">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-800">
            Is it safe to use?
            <span className="transition group-open:rotate-180 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>
          </summary>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Absolutely. We use secure encryption and privacy protection for all transactions. Your safety and privacy are our top priorities.
          </p>
        </details>
      </div>

      {/* Section for "Didn't find the answer?" */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Didn't find the answer you are looking for?
          <br />
          Eget nam congue neque nunc vel viverra lorem massa urna. Magna proin
          pellentesque cras amet et. Sit in mattis quam nec tellus.
        </p>
        {/* Contact Support Button */}
        <button className="mt-4 rounded-full bg-purple-600 text-white px-8 py-3 hover:bg-purple-700 transition duration-200 shadow-md">
          Contact Our Support
        </button>
      </div>
    </section>
  );
}
