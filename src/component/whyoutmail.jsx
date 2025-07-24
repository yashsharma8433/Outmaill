import React from 'react';


export default function Membership() {
  return (
    <div className="bg-white">
      {/* Membership Plans Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-sm font-medium text-purple-500">Membership</h1>
        <h2 className="text-3xl font-semibold mt-2 tracking-tighter">Your Gateway to Premium Services</h2>
        <p className="mt-2 text-gray-500">Choose the plan that fits your needs.</p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {/* Basic */}
          <div className="bg-black text-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Basic Membership</h3>
            <ul className="text-left list-disc list-inside space-y-1 mb-4">
              <li>Limited Access</li>
              <li>General Support</li>
              <li>No Special Offers</li>
            </ul>
            <button className="bg-white text-black px-4 py-2 rounded-full">Join Basic</button>
          </div>

          {/* Pro */}
          <div className="bg-purple-600 text-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Pro Membership</h3>
            <ul className="text-left list-disc list-inside space-y-1 mb-4">
              <li>Full Access</li>
              <li>Priority Support</li>
              <li>Monthly Offers</li>
            </ul>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-full">Join Pro</button>
          </div>

          {/* VIP */}
          <div className="bg-black text-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">VIP Membership</h3>
            <ul className="text-left list-disc list-inside space-y-1 mb-4">
              <li>All Features</li>
              <li>24/7 Support</li>
              <li>Exclusive Deals</li>
            </ul>
            <button className="bg-white text-black px-4 py-2 rounded-full">Join VIP</button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-purple-600 to-purple-800 text-white text-center">
        <h3 className="text-sm">How it Works</h3>
        <h2 className="text-3xl font-semibold mt-2">Understanding Outmail Process</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>
            <h4 className="font-semibold">Sign Up</h4>
            <p className="text-sm text-purple-100">Create your account</p>
          </div>
          <div>
            <h4 className="font-semibold">Exclusive Content</h4>
            <p className="text-sm text-purple-100">Unlock valuable insights</p>
          </div>
          <div>
            <h4 className="font-semibold">Participate</h4>
            <p className="text-sm text-purple-100">Engage with members</p>
          </div>
          <div>
            <h4 className="font-semibold">Benefits</h4>
            <p className="text-sm text-purple-100">Enjoy all perks</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

    </div>
  );
}
