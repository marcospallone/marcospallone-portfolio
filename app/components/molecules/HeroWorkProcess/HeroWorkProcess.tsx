'use client';

import { heroSteps } from '@/app/data/hero';
import { motion } from 'motion/react';

const HeroWorkProcess: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="relative flex flex-col items-center"
    >

      <div className="space-y-8 w-full">
        {heroSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black border border-cyan-500/40 group-hover:border-cyan-400 transition-colors">
                <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>

              <div className="mt-3">
                <span className="block text-sm font-mono text-zinc-500 mb-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-zinc-200 font-bold text-lg uppercase font-mono">
                  {step.title}
                </h2>
                <p className="text-base text-zinc-400 font-mono mt-1">
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
