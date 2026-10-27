'use client';

import { useCursor } from '@/app/providers';
import { heroSteps } from '@/app/data/hero';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const STEP_DURATION = 2800;
const RADIUS = 40; // % of the container, used both for nodes and the SVG ring

// Position of each step on the ring, starting at 12 o'clock and going clockwise
const nodePosition = (index: number) => {
  const angle = (-90 + (360 / heroSteps.length) * index) * (Math.PI / 180);
  return {
    left: `${50 + RADIUS * Math.cos(angle)}%`,
    top: `${50 + RADIUS * Math.sin(angle)}%`,
  };
};

const HeroWorkProcess: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { setCursorType } = useCursor();
  const step = heroSteps[active];

  useEffect(() => {
    if (paused) return;
    const timeout = setTimeout(() => {
      setActive((prev) => (prev + 1) % heroSteps.length);
    }, STEP_DURATION);

    return () => clearTimeout(timeout);
  }, [active, paused]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mx-auto w-full max-w-[460px] px-6 sm:px-0"
    >
      <p className="mb-4 text-center text-base font-medium text-zinc-300">
        How I work
        <span className="ml-2 text-zinc-500 font-normal">· a loop, not a line</span>
      </p>

      <div
        className="relative aspect-square w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Soft glow */}
        <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-cyan-500/15 to-purple-500/15 blur-3xl" />

        {/* Ring */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
          <defs>
            <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" />
          <circle
            cx="50"
            cy="50"
            r={RADIUS + 6}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.3"
            strokeDasharray="0.6 2"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="url(#hero-ring)"
            strokeWidth="0.8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active / heroSteps.length }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </svg>

        {/* Centre: active step details */}
        <div className="absolute inset-[24%] flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="text-xs sm:text-sm text-zinc-500">
                Step {active + 1} of {heroSteps.length}
              </span>
              <h2 className="mt-1 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-2xl sm:text-3xl font-bold tracking-tight text-transparent">
                {step.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nodes */}
        {heroSteps.map((s, index) => {
          const Icon = s.icon;
          const isActive = index === active;
          const isDone = index < active;

          return (
            <button
              key={s.title}
              type="button"
              aria-label={s.title}
              aria-pressed={isActive}
              onClick={() => setActive(index)}
              onMouseEnter={() => {
                setActive(index);
                setCursorType('link');
              }}
              onMouseLeave={() => setCursorType('default')}
              style={nodePosition(index)}
              className="group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <span
                className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                  isActive
                    ? 'scale-110 border-cyan-400/80 bg-cyan-400/15 shadow-[0_0_24px_rgba(34,211,238,0.45)]'
                    : isDone
                      ? 'border-cyan-500/40 bg-[#0a0a0f]/90'
                      : 'border-white/10 bg-[#0a0a0f]/90 group-hover:border-white/30'
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-colors duration-300 ${
                    isActive ? 'text-cyan-200' : isDone ? 'text-cyan-400/80' : 'text-zinc-500'
                  }`}
                />
              </span>
              <span
                className={`absolute top-full mt-2 whitespace-nowrap text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-zinc-50' : 'text-zinc-400'
                }`}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HeroWorkProcess;
