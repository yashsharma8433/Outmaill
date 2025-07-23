import React from 'react'
import Image from 'next/image'

// Replace with your actual image paths or imports
const logos = [
  '/public/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
]

export default function Partners() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-10">
        Our Diverse Network of Partners.
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {logos.map((logo, index) => (
          <div key={index} className="w-32 h-auto grayscale hover:grayscale-0 transition">
            <Image
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={128}
              height={64}
              className="object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
