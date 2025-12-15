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
      <span className="inline-flex justify-center ml-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.colored}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`${current.color} font-mono font-semibold`}
          >
            <span className='text-zinc-200'>{current.prefix}</span>
            {' '}
            {current.colored}
            {' '}
            <span className='text-zinc-200'>{current.suffix}</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
};

export default SectionSubtitle;
