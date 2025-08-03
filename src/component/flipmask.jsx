'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export default function FlipMaskCard({ children }) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const borderRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const maskImage = useMotionTemplate`radial-gradient(180px at ${offsetX}px ${offsetY}px, white, transparent)`;

  useEffect(() => {
    const node = borderRef.current;
    if (!node) return;

    const updateMousePosition = (e) => {
      const rect = node.getBoundingClientRect();
      offsetX.set(e.clientX - rect.left);
      offsetY.set(e.clientY - rect.top);
    };

    const handleMouseEnter = (e) => {
      setIsHovering(true);
      updateMousePosition(e); // 🔥 update immediately on hover
    };

    const handleMouseLeave = () => setIsHovering(false);

    node.addEventListener('mousemove', updateMousePosition);
    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node.removeEventListener('mousemove', updateMousePosition);
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [offsetX, offsetY]);

  return (
    <div
      ref={borderRef}
      className="relative w-[300px] h-[300px] md:w-[450px] md:h-[350px] rounded-[40px] overflow-hidden border border-white/30 px-5 py-10 text-center group bg-black"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none border-2 border-purple-400 rounded-[40px]"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      {children}
    </div>
  );
}