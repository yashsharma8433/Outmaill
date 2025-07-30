'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
const projects = [
  {
    title: 'Outmail',
    description:
      'Outmail',
    src: 'rock.jpg',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#5C1ED9',
  },
  {
    title: 'Outmail',
    description:
      'Outmail',
    src: 'tree.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#5C1ED9',
  },
  {
    title: 'Outmail',
    description:
      'Outmail',
    src: 'water.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#5C1ED9',
  },
  {
    title: 'Outmail',
    description:
      'Outmail',
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#5C1ED9',
  },
  {
    title: 'Outmail',
    description:
      'Outmail',
    src: 'cactus.jpg',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#5C1ED9',
  },
];
export default function StackingCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main  ref={container}>
        <>
        
        </>

        <section className="text-white   w-full  pt-0 mt-0  ">
          {projects.slice(0, 3).map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

      </main>
    </ReactLenis>
  );
}
export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      {/* Gradient background only on 2nd card (i === 1) */}
      {i === 1 && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background:
              'linear-gradient(to bottom, #000, #200D42 30%, #4F21A1 50%, #A46EDB 70%, #FFFFFF 100%)',
          }}
        ></motion.div>
      )}

      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top z-10`}
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <p className="text-sm">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a
                href={'#'}
                target="_blank"
                className="underline cursor-pointer"
              >
                See more
              </a>
              {/* Arrow icon */}
            </span>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image fill src={url} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

