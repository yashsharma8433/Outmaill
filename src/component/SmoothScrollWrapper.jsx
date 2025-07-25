'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function SmoothScrollWrapper({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
