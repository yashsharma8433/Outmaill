'use client';
import { ReactLenis } from 'lenis/react';
import { useState, useEffect, useRef } from 'react';

export default function Index() {
  const [visionActiveIndex, setVisionActiveIndex] = useState(0);
  const [missionActiveIndex, setMissionActiveIndex] = useState(0);
  
  const visionImageRefs = useRef([]);
  const missionImageRefs = useRef([]);

  // Three vision points
  const visions = [
    "Democratize Innovation: Making cutting-edge technology accessible to businesses of all sizes, enabling them to compete on a global scale.",
    "Sustainable Digital Future: Creating eco-friendly solutions that minimize environmental impact while maximizing technological advancement.",
    "Human-Centric Design: Developing intuitive interfaces and experiences that enhance human potential rather than replace it."
  ];

  // Three mission points
  const missions = [
    "Accelerate Business Growth: Providing scalable digital solutions that help companies streamline operations and reach new markets faster.",
    "Foster Creative Excellence: Empowering creators and entrepreneurs with tools that transform ideas into impactful digital experiences.",
    "Bridge Technology Gaps: Connecting traditional industries with modern technology through seamless integration and user-friendly platforms."
  ];

  // Image URLs
  const images = [
    "https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
  ];

  // Vision section observer
  useEffect(() => {
    const visionObserver = new IntersectionObserver(
      (entries) => {
        // Filter intersecting entries and sort by their position in viewport
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.y - b.boundingClientRect.y);

        if (visibleEntries.length > 0) {
          // Get the topmost visible element
          const topEntry = visibleEntries[0];
          const index = visionImageRefs.current.indexOf(topEntry.target);
          if (index !== -1) {
            setVisionActiveIndex(index);
          }
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    visionImageRefs.current.forEach((ref) => {
      if (ref) visionObserver.observe(ref);
    });

    return () => {
      visionImageRefs.current.forEach((ref) => {
        if (ref) visionObserver.unobserve(ref);
      });
    };
  }, []);

  // Mission section observer (FIXED)
  useEffect(() => {
    const missionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.y - b.boundingClientRect.y);
        
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries[0];
          const index = missionImageRefs.current.indexOf(topEntry.target);
          if (index !== -1) {
            setMissionActiveIndex(index);
          }
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );
    
    missionImageRefs.current.forEach((ref) => {
      if (ref) missionObserver.observe(ref);
    });

    return () => {
      missionImageRefs.current.forEach((ref) => {
        if (ref) missionObserver.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          {/* Your existing content can go here */}
        </div>

        {/* Vision Section */}
        <section className="bg-gradient-to-l from-black via-[#6c00ff] to-black w-full">
          <div className="grid grid-cols-2">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <div className="text-right px-8">
                <h1 className="2xl:text-7xl text-white text-5xl font-semibold text-left tracking-tight leading-[120%] mb-4">
                  Our Vision
                </h1>
                <div className="text-white text-lg max-w-xl text-left">
                  <div className="mb-6">
                    <p className="transition-all duration-500 ease-in-out">
                      {visions[visionActiveIndex]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {images.map((image, index) => (
                <figure 
                  key={index}
                  ref={(el) => (visionImageRefs.current[index] = el)}
                  className={`grid place-content-center h-screen ${
                    index % 2 === 0 ? '-skew-x-12' : 'skew-x-12'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Vision ${index + 1}`}
                    className="transition-all duration-300 w-80 h-96 align-bottom object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="text-white w-full bg-gradient-to-l from-black via-[#6c00ff] to-black">
          <div className="grid grid-cols-2 px-8">
            <div className="space-y-4">
              {images.map((image, index) => (
                <figure 
                  key={index}
                  ref={(el) => (missionImageRefs.current[index] = el)}
                  className="sticky top-0 h-screen grid place-content-center"
                >
                  <img
                    src={image}
                    alt={`Mission ${index + 1}`}
                    className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                  />
                </figure>
              ))}
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <div className="text-right px-8">
                <h1 className="text-5xl text-white text-left font-medium tracking-tight leading-[120%] mb-4">
                  Our Mission
                </h1>
                <div className="text-white text-lg max-w-xl text-left">
                  <div className="mb-6">
                    <p className="transition-all duration-500 ease-in-out">
                      {missions[missionActiveIndex]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}