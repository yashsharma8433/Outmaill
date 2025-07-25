import React from 'react';
import Image from 'next/image';


const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
];

export default function Partners() {
  const repeatedLogos = [...logos, ...logos]; // Duplicate for seamless loop

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden  -mt-50">
      <h2 className="text-2xl font-semibold text-gray-900 mb-10">
        Our Diverse Network of Partners.
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="mx-6 w-32 grayscale hover:grayscale-0 transition">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={128}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
