import React from 'react'

export default function MissionValues() {
  return (
    <div className="bg-white text-black">
      {/* Vision Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-600 text-white p-10 rounded-t-[60px] mx-4 mt-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-lg sm:text-xl font-light">
            Our vision is to foster widespread adoption and technology and by championing innovation, accessibility, and security. We aim to empower individuals and businesses globally through user-friendly solutions that simplify complex financial processes and enable seamless participation in the digital economy.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
            <div>
              <p className="font-bold text-white">Ipan Benjamin</p>
              <p className="text-sm text-white">founder of outmail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 sm:px-20 bg-white text-black">
        <p className="text-sm text-gray-600">Our Mission</p>
        <h2 className="text-3xl font-bold mb-4">outmail Mission</h2>
        <p className="text-gray-500 max-w-2xl">Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia viverra orci diam.</p>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <div className="space-y-8">
            {[
              "Secure Crypto Solutions",
              "Empowering Crypto Education",
              "Advancing Decentralization"
            ].map((title, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center text-white font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-600">Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia.</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-64 bg-purple-300 rounded-[40px]" />
        </div>

        <div className="mt-6">
          <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700 transition-all">
            Learn More
          </button>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-b from-violet-700 to-purple-900 text-white py-20 px-6 sm:px-20 rounded-t-[60px]">
        <p className="text-sm text-center text-purple-200">Our Value</p>
        <h2 className="text-3xl font-bold text-center mb-4">Outmail Foundational Values</h2>
        <p className="text-center text-purple-200 max-w-2xl mx-auto mb-16">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            'Integrity', 'Innovation', 'Customer-Centricity',
            'Collaboration', 'Accountability', 'Empowerment'
          ].map((value, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-black text-white rounded-full flex items-center justify-center font-semibold">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <h3 className="font-semibold text-lg">{value}</h3>
              <p className="text-sm text-purple-200">
                Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
