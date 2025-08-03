import React from 'react';
import { ShieldCheck, BarChart2, Settings, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck size={28} className="text-white" />,
      title: 'Advanced Security Measures',
      desc: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.',
    },
    {
      icon: <BarChart2 size={28} className="text-white" />,
      title: 'Real-time Analytics Dashboard',
      desc: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.',
    },
    {
      icon: <Settings size={28} className="text-white" />,
      title: 'Customizable Integrations',
      desc: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.',
    },
    {
      icon: <Zap size={28} className="text-white" />,
      title: 'AI-powered Automation',
      desc: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.',
    },
  ];

  return (
    <div className="bg-gradient-to-l from-black via-[#6c00ff] to-black flex items-center justify-center px-8 py-20 min-h-screen" style={{

  }}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="text-white">
          <p className="text-sm opacity-70 mb-2">Our Features</p>
          <h2 className="text-4xl font-bold mb-10">
            Outmail<span className="text-white">'s</span> Key <br /> Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="bg-white/20 p-3 w-fit rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Dashboard image (mockup or actual image) */}
        <div className="w-full flex  justify-end ">
          <img
            src="../../dashboard.jpg" 
            alt="Dashboard Preview"
            className="rounded-4xl shadow-xl  max-w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 translate-x-12 md:translate-x-24 lg:translate-x-32 "
            width={1000}
          />
        </div>
      </div>
    </div>
  );
}
