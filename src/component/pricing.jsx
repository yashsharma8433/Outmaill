import React from 'react';

export default function Pricing() {
  const memberships = [
    {
      level: 'Entry Level',
      title: 'Basic Membership',
      features: [
        'Access to beginner Job',
        'Monthly market insights newsletter',
        'Limited access to trading tools',
        'Community forum participation',
        'Discount on select partner services',
      ],
      buttonText: 'Join Basic Membership',
      buttonStyle: 'bg-white text-black',
    },
    {
      level: 'Intermediate Level',
      title: 'Pro Membership',
      features: [
        'Full access to advanced beginner Job',
        'Weekly market analysis reports',
        'Set of trading tools and indicators',
        'Priority support from our team',
        'Exclusive webinars and events',
      ],
      buttonText: 'Upgrade Pro Membership',
      buttonStyle: 'bg-[#6c00ff] text-white',
    },
    {
      level: 'Premium Level',
      title: 'VIP Membership',
      features: [
        'Personalized one-on-one consultations',
        'Daily market alerts and insights',
        'Access to exclusive research and reports',
        'Customized portfolio management',
        'Invitations to VIP events and networking',
      ],
      buttonText: 'Become a VIP Member',
      buttonStyle: 'bg-white text-black',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#2a00b7] to-[#6c00ff] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-medium text-white/80 mb-2">Membership</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Gateway to Premium AI Job Services
        </h2>
        <p className="text-white/70 mb-12 max-w-2xl mx-auto">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((plan, idx) => (
            <div key={idx} className="bg-black rounded-2xl p-8 text-left shadow-lg">
              <span className="text-sm px-3 py-1 bg-white/10 rounded-full text-white/80 mb-4 inline-block">
                {plan.level}
              </span>
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-white/70 mb-6">
                In lobortis justo tortor viverra. Quis euismod purus cursus ultricies faucibus fringilla.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-white/90">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#6c00ff] text-xl leading-4">•</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full text-center py-2 px-4 rounded-full font-medium ${plan.buttonStyle} hover:opacity-90 transition`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
