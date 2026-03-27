'use client';

import { SubtitleKeyword } from '@/app/models/subtitle-interface';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SectionSubtitleProps {
  keywords: SubtitleKeyword[];
  delay: number;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ keywords, delay }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const current = keywords[index];

  return (
    <p className="text-xl md:text-2xl text-center text-zinc-300">
      <span
        className="
        block
        mx-auto
        max-w-[28ch]
        overflow-hidden
        text-center
        leading-snug
        h-[4.2em]
        md:h-auto
        md:max-w-none
      "
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`${current.prefix}-${current.colored}-${current.suffix}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="block line-clamp-2 font-mono"
          >
            <span className="text-zinc-400 font-normal">{current.prefix}</span>
            {current.prefix && ' '}
            <span className={`${current.color} font-semibold`}>{current.colored}</span>
            {current.suffix && ' '}
            <span className="text-zinc-400 font-normal">{current.suffix}</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
};

export default SectionSubtitle;
