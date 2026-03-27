'use client';

import { heroSteps } from '@/app/data/hero';
import { motion } from 'motion/react';

const HeroWorkProcess: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.18 } },
      }}
      className="relative flex flex-col items-center"
    >
      <div className="space-y-0 w-full">
        {heroSteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === heroSteps.length - 1;

          return (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative flex items-start gap-5 group"
            >
              {/* Left column: icon + connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-[#050508] border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                {!isLast && (
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500/40 to-transparent mt-1" />
                )}
              </div>

              {/* Right column: content */}
              <div className={`flex flex-col text-left ${isLast ? 'pb-0' : 'pb-8'}`}>
                <span className="block text-xs font-mono text-zinc-600 mb-0.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-zinc-200 font-semibold text-base uppercase font-mono leading-tight">
                  {step.title}
                </h2>
                <p className="text-sm text-zinc-500 font-mono mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HeroWorkProcess;
