'use client';
import { useState } from 'react';
import { ArrowRight, Code2, Copy, Rocket, Zap } from 'lucide-react';

export default function CardFlip(props) {
  const {
    title = 'Build MVPs Fast',
    subtitle = 'Launch your idea in record time',
    description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
    features = [
      'Copy & Paste Ready',
      'Developer-First',
      'MVP Optimized',
      'Zero Setup Required',
    ],
  } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[360px] w-full max-w-[300px] [perspective:1500px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 h-full w-full rounded-2xl bg-[#5d21cc] text-white shadow-xl [backface-visibility:hidden] transition-opacity duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
          <div className="absolute inset-0 flex items-center justify-center pt-20">
            <div className="relative flex h-[100px] w-[200px] flex-col items-center justify-center gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-3 rounded-sm bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 animate-slideIn opacity-0"
                  style={{
                    width: `${60 + Math.random() * 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    marginLeft: `${Math.random() * 20}%`,
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center shadow-primary/25 shadow-lg animate-pulse transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 left-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold tracking-tight dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-zinc-300">{subtitle}</p>
              </div>
              <div className="group/icon relative">
                <div className="absolute inset-[-8px] rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                <Zap className="text-white h-5 w-5 relative z-10 group-hover/icon:scale-110 group-hover/icon:rotate-12 transition-all" />
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800 text-zinc-900 dark:text-white shadow-xl p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] transition-opacity duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-2xl" />
          <div className="relative z-10 flex-1 space-y-5">
            <div className="space-y-2">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-primary/90 to-primary/80">
                  <Code2 className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
            </div>

            <div className="space-y-2.5">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                    style={{
                      transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200}ms`,
                      transition: 'all 0.5s ease',
                    }}
                  >
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 dark:bg-primary/20">
                      <Icon className="h-3 w-3 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mt-auto border-t border-slate-200 pt-4 dark:border-zinc-800">
            <div className="group/start flex items-center justify-between rounded-lg p-2.5 transition-all bg-gradient-to-r from-slate-100 via-slate-100 to-slate-100 dark:from-zinc-800 dark:to-zinc-800 hover:from-primary/10 hover:via-primary/5 hover:to-transparent dark:hover:from-primary/20 dark:hover:to-transparent border border-transparent hover:scale-[1.02] cursor-pointer">
              <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover/start:text-primary">
                Start Building
              </span>
              <div className="group/icon relative">
                <div className="absolute inset-[-6px] rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 scale-90 group-hover/start:opacity-100 group-hover/start:scale-100 transition-all" />
                <ArrowRight className="text-primary h-4 w-4 z-10 relative group-hover/start:translate-x-1 group-hover/start:scale-110 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
        .animate-slideIn {
          animation: slideIn 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
