"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    testimonial: "My favorite solution in the market. We work 5x faster with COMPANY.",
    by: "Alex, CEO at TechCorp",
    imgSrc: "https://i.pravatar.cc/150?img=1",
  },
  {
    testimonial: "I'm confident my data is safe with COMPANY. I can't say that about other providers.",
    by: "Dan, CTO at SecureNet",
    imgSrc: "https://i.pravatar.cc/150?img=2",
  },
  {
    testimonial: "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
    by: "Stephanie, COO at InnovateCo",
    imgSrc: "https://i.pravatar.cc/150?img=3",
  },
  {
    testimonial: "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
    by: "Marie, CFO at FuturePlanning",
    imgSrc: "https://i.pravatar.cc/150?img=4",
  },
  {
    testimonial: "If I could give 11 stars, I'd give 12.",
    by: "Andre, Head of Design at CreativeSolutions",
    imgSrc: "https://i.pravatar.cc/150?img=5",
  },
  {
    testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
    by: "Jeremy, Product Manager at TimeWise",
    imgSrc: "https://i.pravatar.cc/150?img=6",
  },
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-[#5C1ED9] text-white font-extrabold border-primary"
          : "z-0 bg-white text-black border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{ boxShadow: "3px 3px 0px hsl(var(--background))" }}
      />
      <h3
        className={cn(
          "text-base sm:text-xl font-medium",
          isCenter ? "text-primary-foreground" : "text-black"
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(
    testimonials.map((t) => ({ ...t, tempId: Math.random() }))
  );

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-muted/30" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-60">
  <button
    onClick={() => handleMove(-1)}
    className="flex h-14 w-14 items-center justify-center text-2xl bg-background border-2 border-border text-[#6c00ff] rounded-full transition hover:bg-gray-300"
    aria-label="Previous testimonial"
  >
    <ChevronLeft />
  </button>
  <button
    onClick={() => handleMove(1)}
    className="flex h-14 w-14 items-center justify-center text-2xl bg-background border-2 border-border text-[#6c00ff] rounded-full transition hover:bg-gray-300"
    aria-label="Next testimonial"
  >
    <ChevronRight />
  </button>
</div>

    </div>
  );
};

export default StaggerTestimonials;
